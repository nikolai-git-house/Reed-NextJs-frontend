import { GET } from '../lib/request';

export const GET_SHOP_ITEMS_START = "GET_SHOP_ITEMS_START"
export const getShopItemsStart = (data) => {
  return {type: GET_SHOP_ITEMS_START, data}
}

export const GET_SHOP_ITEMS_SUCCESS = "GET_SHOP_ITEMS_SUCCESS"
export const getShopItemsSuccess = (data) => {
  return {type: GET_SHOP_ITEMS_SUCCESS, data}
}

export const GET_SHOP_ITEMS_ERROR = "GET_SHOP_ITEMS_ERROR"
export const getShopItemsError = (data) => {
  return {type: GET_SHOP_ITEMS_ERROR, data}
}


export const getShopItems = () => {
  return async (dispatch) => {
    dispatch(getShopItemsStart())
    const resp = await GET('/product')
    resp.data.length ? dispatch(getShopItemsSuccess(resp.data)) : dispatch(getShopItemsError('no items'))
  }
}
