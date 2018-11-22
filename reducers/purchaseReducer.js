
import {
  INCOMING_ORDERS
} from '../actions/purchaseActions';

const INITIAL = { loading: true };

export default (state = { ...INITIAL}, { type, data }) => {
  switch (type){

    case INCOMING_ORDERS:
      return data;

    default:
      return state;
  }
}