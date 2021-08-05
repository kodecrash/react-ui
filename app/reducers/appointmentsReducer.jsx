import * as actionTypes from '../actions/actionTypes';

export const initialState = { };

export const appointmentsReducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.GET_ALL_APPOINTEMTNS:
      return [...action.payload];

    default:
      return state;
  }

}
