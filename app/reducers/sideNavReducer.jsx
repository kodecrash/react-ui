import * as actionTypes from '../actions/actionTypes';

export const initialState = { isSideNavOpen : false};

export const sideNavReducer = (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.OPEN_SIDE_NAV:
      return {isSideNavOpen : true};

    case actionTypes.CLOSE_SIDE_NAV:
      return {isSideNavOpen : false}

    default:
      return state;
  }

}
