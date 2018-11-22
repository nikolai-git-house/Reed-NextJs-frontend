const withImages = require('next-images')
const withSass = require('@zeit/next-sass')

require('dotenv').config()

module.exports = withImages(withSass({
  serverRuntimeConfig: {
    MONGOURL: process.env.MONGOURL,
    API_ENDPOINT_PORTAL: process.env.API_ENDPOINT_PORTAL,
    AUTHORIZED_NET_API_LOGIN: process.env.AUTHORIZED_NET_API_LOGIN,
    AUTHORIZED_NET_TRANSACTION_KEY: process.env.AUTHORIZED_NET_TRANSACTION_KEY,
    AUTHORIZED_NET_KEY: process.env.AUTHORIZED_NET_KEY
  },
  publicRuntimeConfig: {
    OIDC_AUTHORITY: process.env.OIDC_AUTHORITY,
    OIDC_CLIENTID: process.env.OIDC_CLIENTID,
    OIDC_REDIRECT: process.env.OIDC_REDIRECT,
    OIDC_REDIRECT_SILENT: process.env.OIDC_REDIRECT_SILENT,
    OIDC_POST_LOGOUT: process.env.OIDC_POST_LOGOUT,
    OIDC_SCOPE: process.env.OIDC_SCOPE,
    API_ENDPOINT: process.env.API_ENDPOINT,
    API_ENDPOINT_SERVER: process.env.API_ENDPOINT_SERVER
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: Infinity,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 20,
  }
}))