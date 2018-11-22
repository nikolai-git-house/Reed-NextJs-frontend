import {
  INCOMING_RESOURCES
} from '../actions/resourcesActions'


const initial = [];

export default ( state = [...initial], { type, data } ) => {

  switch(type){

    case INCOMING_RESOURCES: 
      return data;

    default:
      return state;

  }

}