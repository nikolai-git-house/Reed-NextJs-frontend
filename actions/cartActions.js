import Router from 'next/router'
import { POST, INTERNAL } from '../lib/request'

import { 
  createProfile, 
  createShipping, 
  changeCard 
} from './paymentActions';


export const ADD_TO_CART = "ADD_TO_CART"
export const addToCart = (data) => {
  return {type: ADD_TO_CART, data}
}
export const addItemToCart = (product) => {
  return async (dispatch) => {
    await dispatch(addToCart(product))
  }
}

export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART"
export const removeCartItem = (data) => {
  return {type: REMOVE_ITEM_FROM_CART, data}
}

export const removeItemFromCart = (productId) => {
  return async (dispatch) => {
    await dispatch(removeCartItem(productId)) 
  }
}

export const CHANGE_ITEM_QUANITY = "CHANGE_ITEM_QUANITY"
export const changeCartItemQuantity = (quantity, productId) => {
  return {type: CHANGE_ITEM_QUANITY, data: {quantity, productId}}
}
export const updateItemQuantity = (quantity, productId) => {
  return async (dispatch) => {
    await dispatch(changeCartItemQuantity(quantity, productId))
  }
}

export const BEGIN_TRANSACTION = "BEGIN_TRANSACTION"
export const beginTransaction = () => {
  return {type: BEGIN_TRANSACTION}
}
export const END_TRANSACTION = "END_TRANSACTION"
export const endTransaction = () => {
  return {type: END_TRANSACTION}
}
export const TRANSACTION_ERROR = "TRANSACTION_ERROR"
export const transactionError = (data) => {
  return {type: TRANSACTION_ERROR, data}
}

const createOrderRegular = ( formdata ) => {
  return async (dispatch, state) => {

    const cart = state().cart;
    const user = state().auth.currentUser;
    let { account, paymentProfile, ...data } = formdata;
    let paymentProfileId;

    // create profile
    if(!account.paymentId || !paymentProfile){

      paymentProfile = await dispatch(createProfile({ ...data, account }))
      paymentProfileId = paymentProfile.paymentProfiles[0].customerPaymentProfileId;
      
    }else{

      // create shipping
      if(data.shipFirstName)
        data.customerAddressId = await dispatch(createShipping({ ...data, account, paymentProfile }));

      // change card
      if(data.cardNumber){
        paymentProfileId = await dispatch(changeCard({ ...data, account, paymentProfile }));
      }else{
        paymentProfileId = paymentProfile.paymentProfiles[0].customerPaymentProfileId;
      }

    }

    // console.log(paymentProfile);
    // throw new Error('not ready');

    const postdata = {
      ...data,
      paymentId: paymentProfile.customerProfileId,
      paymentProfileId,
      userId: user.sid,
      accountId: account.aid,
      invoiceNumber: `inv-${new Date().valueOf()}`,
      date: new Date(),
      ordereditems: cart.addedItems.map(v => ({
        product: v._id,
        productName: v.title,
        productImage: v.gallery[0].url,
        variant: v.variants.map(v => v._id),
        variantName: v.variants.map(v => v.title).join(', '),
        price: v.variants.reduce((a,b) => a + (b.price||0),0),
        quantity: v.quantity
      })),
      beforeTax: cart.beforeTax,
      tax: cart.tax,
      total: cart.beforeTax + cart.tax,
      description: 'REED store purchase',
      accountType: 'regular'
    }

    dispatch(beginTransaction());
    try{
      const resp = await INTERNAL.POST('/checkout', postdata)
      dispatch(endTransaction())
    }catch(e){
      dispatch(transactionError(e.response ? e.response.data.message : e))
      throw e;
    }


  }
}

const createOrderDistributor = (formdata) => async (dispatch, state) => {
  const cart = state().cart;
  const user = state().auth.currentUser;

  // map shipping data
  let { 
    account, paymentProfile, 
    shipFirstName, shipLastName, shipAddress, shipCity, 
    shipProvinceState, shipPostalZip, shipCountry, 
    shipPhoneNumber,
    customerAddressId,
    ...data 
  } = formdata;

  data.firstName = shipFirstName;
  data.lastName = shipLastName;
  data.address = shipAddress;
  data.city = shipCity;
  data.state = shipProvinceState;
  data.zip = shipPostalZip;
  data.country = shipCountry;
  data.phoneNumber = shipPhoneNumber;

  const postdata = {
    ...data,
    userId: user.sid,
    accountId: account.aid,
    invoiceNumber: `inv-${new Date().valueOf()}`,
    date: new Date(),
    ordereditems: cart.addedItems.map(v => ({
      product: v._id,
      productName: v.title,
      productImage: v.gallery[0].url,
      variant: v.variants.map(v => v._id),
      variantName: v.variants.map(v => v.title).join(', '),
      price: v.variants.reduce((a,b) => a + (b.price||0),0),
      quantity: v.quantity
    })),
    beforeTax: cart.beforeTax,
    tax: cart.tax,
    total: cart.beforeTax + cart.tax,
    description: 'REED store purchase',
    accountType: 'distributor'
  }

  // create ordered items
  postdata.ordereditems = await Promise.all(postdata.ordereditems.map(async v => {
    const resp = await POST('/ordereditem', v);
    return resp.data._id
  }));

  console.log(postdata);

  // create order
  await POST('/order', postdata);
}

export const createOrder = (formdata) => dispatch => {
  const { account } = formdata;
  if(account.type === 'regular') return dispatch(createOrderRegular(formdata));
  else return dispatch(createOrderDistributor(formdata));
}