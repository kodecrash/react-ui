import * as actionTypes from '../actions/actionTypes';

export const initialState = { };

export const userReducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.GET_ALL_USERS:
      return [...action.payload];

    default:
      return state;
  }

}
