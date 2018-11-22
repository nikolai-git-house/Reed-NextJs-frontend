
import {
  ADD_TO_CART, 
  REMOVE_ITEM_FROM_CART, 
  CHANGE_ITEM_QUANITY,
  BEGIN_TRANSACTION,
  END_TRANSACTION,
  TRANSACTION_ERROR
} from '../actions/cartActions'

const initialState = () => ({
  addedItems: [],
  beforeTax: 0,
  totalItem: 0,
  loading: false
})

const getTax = ( beforeTax ) => Math.round(beforeTax * 0.13 * 100) / 100; 
const getBeforeTax = ( items ) => items.reduce((a,b) => a + (b.quantity * b.variants.reduce((a,b) => a + (b.price || 0),0)),0);

export default (state = {...initialState()}, action) => {
  switch(action.type) {
    
    case ADD_TO_CART:{
      const item = {...action.data, quantity: 1};

      // check items having the same id and variant
      const sameItem = state.addedItems.findIndex(v => 
        v._id === item._id && 
        item.variants.filter(vv => 
          v.variants.find(vvv => vv._id === vvv._id)
        ).length ===  item.variants.length
      );

      // iff sameItem exists, just add quantity.
      const addedItems = [ ...state.addedItems ];
      if(sameItem > -1) addedItems[sameItem].quantity += 1;
      else addedItems.push(item);

      const beforeTax = getBeforeTax(addedItems);
      return {
        addedItems: addedItems,
        beforeTax: beforeTax,
        tax: getTax(beforeTax),
        totalItem: addedItems.reduce((a,b) => a + b.quantity,0)
      }
    }

    case REMOVE_ITEM_FROM_CART:{
      const newState = [...state.addedItems]
      newState.splice(action.data, 1)
      const beforeTax = getBeforeTax(newState);
      return {
        addedItems: newState,
        beforeTax: beforeTax,
        tax: getTax(beforeTax),
        totalItem: newState.reduce((a,b) => a + b.quantity,0)
      }
    }

    case CHANGE_ITEM_QUANITY:{

      const _newState = [...state.addedItems]
      _newState[action.data.productId].quantity = action.data.quantity
      if(!_newState[action.data.productId].quantity)
        _newState.splice(action.data.productId,1);

      const beforeTax = getBeforeTax(_newState);

      return {
        addedItems: _newState,
        beforeTax: beforeTax,
        tax: getTax(beforeTax),
        totalItem: _newState.reduce((a,b) => a + b.quantity,0)
      }
    }

    case BEGIN_TRANSACTION:
      return {...state, loading: true}
    case END_TRANSACTION:
      return {...initialState(), loading: false}
    case TRANSACTION_ERROR:
      return {...state, loading: false, error: action.data}
    default:
      return state
  }
}
