import {GET_ERRORS} from '../actions/constants'

const initialState = {}


export default (state = initialState, {type, payload}) => {
    switch (type) {
      case GET_ERRORS:
        return payload;
      default:
        return state
    }
};
