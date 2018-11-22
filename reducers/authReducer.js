import {
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  LOG_OUT_SUCCESS,
  GET_USER_START,
  GET_ACCOUNTS_SUCCESS,
} from '../actions/authActions';

import {
  SET_PAYMENT_ID_SUCCESS,
  SET_PAYMENT_PROFILE,
  DELETE_SHIPPING
} from '../actions/paymentActions';


const initialState = {
  currentUser: {},
  access_token : '',
  accounts: { loading: true, length: 0 },
  paymentProfiles: { loading: true, length: 0 },
  loading: true
}

export default (state = { ...initialState }, action) => {

  switch(action.type) {
    case GET_USER_START : 
      return {
        ...state,
        loading: true
      }
    case GET_USER_FAILED : 
      return {
        ...state,
        loading: false
      }
    case GET_USER_SUCCESS:
      return { 
        ...state,
        currentUser: action.data.profile, 
        access_token: action.data.access_token,
        loading: false
      }
    case GET_ACCOUNTS_SUCCESS: 
      return {
        ...state,
        accounts: action.data
      }

    case SET_PAYMENT_ID_SUCCESS:{
      const {aid, paymentId} = action.data;
      if(state.accounts.loading) return state;
      const accounts = [ ...state.accounts ];
      const accountIndex = accounts.findIndex(v => v.aid === aid);
      accounts[accountIndex].paymentId = paymentId;
      return {
        ...state,
        accounts
      }
    }

    case SET_PAYMENT_PROFILE: {
      const {aid, profile} = action.data;
      if(state.accounts.loading) return state;
      const accountIndex = state.accounts.findIndex(v => v.aid === aid);
      const paymentProfiles = state.paymentProfiles.loading ? [] : [ ...state.paymentProfiles ];

      // only use default payment profile
      // or use the first one
      const defaultPayment = profile && profile.paymentProfiles.length && profile.paymentProfiles.find(v => v.defaultPaymentProfile);
      const firstPayment = profile && profile.paymentProfiles.length && profile.paymentProfiles[0];
      profile.paymentProfiles = defaultPayment ? [defaultPayment] : firstPayment ? [firstPayment] : [];
      paymentProfiles[ accountIndex ] = profile;

      return {
        ...state,
        paymentProfiles  
      }
    }

    case DELETE_SHIPPING: {
      if(state.paymentProfiles.loading) return state;
      const { customerAddressId, customerProfileId } = action.data;

      const paymentProfiles = [ ...state.paymentProfiles ];
      const paymentProfile = paymentProfiles.find(v => v.customerProfileId === customerProfileId);

      if(!paymentProfile) return state;
      const shippingIndex = paymentProfile.shipToList.findIndex(v => v.customerAddressId === customerAddressId);
      if(shippingIndex < 0) return state;
      paymentProfile.shipToList.splice(shippingIndex,1);
      
      return { ...state, paymentProfiles };
    }

    case LOG_OUT_SUCCESS:
      return {...state} 
    default:
      return state
  }
  
}