import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from './actions/index';

export const INITIAL_STATE = {
  // initial state here
  magic: [],
  isFetching: false,
  error: ''
}

const useReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        magic: action.payload
      }
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default useReducer;
