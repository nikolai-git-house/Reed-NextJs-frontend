
import { UserManager, WebStorageStateStore } from 'oidc-client';
import getConfig from 'next/config'

const manager = () => {

const { publicRuntimeConfig } = getConfig();
const settings = {
  authority: publicRuntimeConfig.OIDC_AUTHORITY,
  client_id: publicRuntimeConfig.OIDC_CLIENTID,
  redirect_uri: publicRuntimeConfig.OIDC_REDIRECT,
  popup_redirect_uri: publicRuntimeConfig.OIDC_REDIRECT,
  silent_redirect_uri: publicRuntimeConfig.OIDC_REDIRECT_SILENT,
  post_logout_redirect_uri: publicRuntimeConfig.OIDC_POST_LOGOUT,
  scope: 'openid profile reed_payment_portal',
  response_type: 'id_token token',
  filterProtocolClaims: true,
  automaticSilentRenew: true,
  userStore: process.browser ? new WebStorageStateStore({store: window.localStorage }) : null
};

  return process.browser ? new UserManager(settings) : {
    getUser: () => {} ,
    signinRedirect: () => {},
    signoutRedirect: () => {},
    signinRedirectCallback: () => {} ,
    signinSilentCallback: () => {}
  };
}

export const ssoUser = () => manager().getUser();
export const ssoLogin = () => manager().signinRedirect();
export const ssoLogout = () => manager().signoutRedirect();
export const ssoCallback = () => manager().signinRedirectCallback();
export const ssoSilentCallback = () => manager().signinSilentCallback();
