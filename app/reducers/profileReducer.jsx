import * as actionTypes from '../actions/actionTypes';

export const initialState = { };

export const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.SAVE_PROFILE:
      return action.payload;

    default:
      return state;
  }

}
