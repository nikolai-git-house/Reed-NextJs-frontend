import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig();

export const ApiUrl = publicRuntimeConfig.API_ENDPOINT;
export const OidcCLientId = publicRuntimeConfig.OIDC_CLIENTID;