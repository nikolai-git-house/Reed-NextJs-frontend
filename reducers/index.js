import { combineReducers } from 'redux'
import authReducer from './authReducer'
import shopReducer from './shopReducer'
import cartReducer from './cartReducer'
import uiReducer from './uiReducer'
import resourcesReducer from './resourcesReducer'
import productReducer from './productReducer'
import subscriptionReducer from './subscriptionsReducer'
import purchaseReducer from './purchaseReducer'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
  auth: authReducer,
  shop: shopReducer,
  cart: persistReducer({ key: 'reed_cart', storage, blacklist: ['error'] }, cartReducer),
  ui: uiReducer,
  subscriptions: subscriptionReducer,
  resources: resourcesReducer,
  product: productReducer,
  purchases: purchaseReducer
})

export default reducers