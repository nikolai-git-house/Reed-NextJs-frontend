
import {
  INCOMING_PRODUCT
} from '../actions/productActions';

const initial = {};

export default ( state = { ...initial }, { type, data}) => {

  switch( type ){

    case INCOMING_PRODUCT:
      return data;

    default:
      return state;

  }

}

