import { INTERNAL } from '../lib/request';

export const SET_PAYMENT_ID_SUCCESS = 'SET_PAYMENT_ID_SUCCESS';
function setPaymentIDSuccess(data) {
  return { type: SET_PAYMENT_ID_SUCCESS, data }
}

export const setPaymentId = (aid, paymentId) => async dispatch => {
  await INTERNAL.POST(`/accounts/${aid}/paymentId/${paymentId}`);
  dispatch(setPaymentIDSuccess({ aid, paymentId }));
}

export const SET_PAYMENT_PROFILE = 'SET_PAYMENT_PROFILE';
export const setPaymentProfile = (aid, profile) => async dispatch => {
  dispatch({
    type: SET_PAYMENT_PROFILE,
    data: { aid, profile }
  });
}

export const getPaymentProfile = (account, paymentId) => async dispatch => {
  const resp = await INTERNAL.GET(`/payment/${account.paymentId}`);
  dispatch(setPaymentProfile(account.aid, resp.data));
  return resp.data;
}

export const createProfile = ({
  cardNumber,
  cardAddress,
  cardZip,
  cardExpiry,
  cardCvc,
  shipFirstname, shipLastname, shipAddress, shipCity, 
  shipProvincestate, shipPostalzip, shipCountry, 
  shipPhonenumber,
  account
}) => async dispatch => {

  const resp = await INTERNAL.POST('/payment',{
    cardNumber,
    cardAddress,
    cardZip,
    cardExpiry,
    cardCvc,
    shipFirstname, shipLastname, shipAddress, shipCity, 
    shipProvincestate, shipPostalzip, shipCountry, 
    shipPhonenumber,
    userName: account.name,
    userEmail: account.owner
  });

  dispatch(setPaymentId(account.aid, resp.data.customerProfileId));
  dispatch(setPaymentProfile(account.aid, resp.data));

  return resp.data;

}

export const changeCard = ({
  cardNumber,
  cardAddress,
  cardZip,
  cardExpiry,
  cardCvc, 
  account, 
  paymentProfile
}) => async dispatch => {

  const resp = await INTERNAL.PUT(`/payment/${paymentProfile.customerProfileId}`,{
    cardNumber,
    cardAddress,
    cardZip,
    cardExpiry,
    cardCvc, 
    paymentProfileId: paymentProfile.paymentProfiles[0].customerPaymentProfileId
  });

  dispatch(setPaymentProfile(account.aid, resp.data.profile));  
  return resp.data.paymentProfileId

}

export const createShipping = ({
  shipFirstName, shipLastName, shipAddress, shipCity, 
  shipProvinceState, shipPostalZip, shipCountry, 
  shipPhoneNumber,
  account, 
  paymentProfile
}) => async dispatch => {

  const resp = await INTERNAL.POST(`/payment/${paymentProfile.customerProfileId}/shipping`,{
    shipFirstName, shipLastName, shipAddress, shipCity, 
    shipProvinceState, shipPostalZip, shipCountry, 
    shipPhoneNumber
  });

  dispatch(setPaymentProfile(account.aid, resp.data.profile));  
  return resp.data.customerAddressId

}

export const DELETE_SHIPPING = 'DELETE_SHIPPING';
export const deleteShipping = (customerAddressId, account, paymentProfile) => async dispatch => {
  
  // avoid deleting the only address
  if(paymentProfile.shipToList && paymentProfile.shipToList.length === 1)
    return;

  dispatch({ 
    type: DELETE_SHIPPING, 
    data: {customerAddressId, customerProfileId: paymentProfile.customerProfileId} 
  });

  const resp = await INTERNAL.DELETE(`/payment/${paymentProfile.customerProfileId}/shipping/${customerAddressId}`);
  dispatch(setPaymentProfile(account.aid, resp.data.profile));  
  return resp.data.profile;
}