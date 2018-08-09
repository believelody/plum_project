import {GET_ERRORS, RESET_ERRORS} from '../actions/constants'

const initialState = {}


export default (state = initialState, {type, payload}) => {
    switch (type) {
      case GET_ERRORS:
        return payload;
      case RESET_ERRORS:
        return {};
      default:
        return state
    }
};
