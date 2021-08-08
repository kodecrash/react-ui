import * as actionTypes from '../actions/actionTypes';

export const initialState = {};

export const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
            };

        case actionTypes.LOGIN_FAILED:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };

        default:
            return state;
    }

}
