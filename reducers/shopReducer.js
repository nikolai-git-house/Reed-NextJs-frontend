import {GET_SHOP_ITEMS_SUCCESS, GET_SHOP_ITEMS_START, GET_SHOP_ITEMS_ERROR} from '../actions/shopActions'

const initialState = {
  items: [],
  loading: true
}

export default (state = {...initialState}, action) => {
  switch(action.type) {
    case GET_SHOP_ITEMS_START:
      return { ...state}
    case GET_SHOP_ITEMS_SUCCESS:
      return { items: action.data, loading: false }
    default:
      return state
  }
}
