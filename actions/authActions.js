import { ssoLogin, ssoLogout, ssoUser } from '../lib/sso-auth';
import { setUser, INTERNAL } from '../lib/request';

import {
  setPaymentProfile,
  getPaymentProfile
} from './paymentActions';

export const GET_USER_START = 'GET_USER_START';
export const getUserStart = () => ({
  type: GET_USER_START
})

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export function getUserSuccess(data) {
  return {type: GET_USER_SUCCESS, data}
}

export const GET_USER_FAILED = 'GET_USER_FAILED';
export function getUserFailed() {
  return {type: GET_USER_FAILED}
}

export const GET_ACCOUNTS_SUCCESS = 'GET_ACCOUNTS_SUCCESS';
export function getAccountsSuccess(data) {
  return {type: GET_ACCOUNTS_SUCCESS, data}
}

export const getUser = () => {
  return async (dispatch) => {
    dispatch(getUserStart());

    try{
      const user = await ssoUser();

      // if get user failed
      if(!user) 
        return dispatch(getUserFailed());

      // token have expired
      if(user.expires_at < (new Date().valueOf()/1000)) 
        return dispatch(getUserFailed());

      dispatch(getUserSuccess({ ...user }));
      setUser(user);
      await dispatch(getAccounts());

    }catch(e){
      console.error(e);
      dispatch(getUserFailed());
    }

  }
}


export const LOGGED_IN_SUCCESS = 'LOGGED_IN_SUCCESS';
export function logInSuccess(data) {
  return { type: LOGGED_IN_SUCCESS, data}
}
export const logIn = () => {
  return async (dispatch) => {
      const user = await ssoLogin();
      dispatch(getUser())
  }
}


export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export function logOutSuccess() {
  return { type: LOG_OUT_SUCCESS }
}
export const logOut = () => {
  return async (dispatch) => {
      await ssoLogout();
      setUser({});
      dispatch(logOutSuccess())
  }
}

export const getAccounts = ( fetchPaymentProfile = true ) => async dispatch => {
  const resp = await INTERNAL.GET('/accounts');
  dispatch(getAccountsSuccess(resp.data))

  if(!fetchPaymentProfile) return;
  
  resp.data.forEach(async (account, i) => {

    if(!account.paymentId) return dispatch(setPaymentProfile(account.aid, null));
    dispatch(getPaymentProfile(account, account.paymentId));

  })
}
