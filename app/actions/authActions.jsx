import * as actionTypes from './actionTypes';
import authService from '../services/auth.service';

export const login = (data) => async (dispatch) => {
    try {
        const res = await authService.login(data);

        if (res.data && res.data.username == data.username
            && res.data.password == data.password) {
            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                payload: res.data,
            });
        } else {
            dispatch({
                type: actionTypes.LOGIN_FAILED,
                payload: null,
            });
        }

    } catch (err) {
        dispatch({
            type: actionTypes.LOGIN_FAILED,
            payload: null,
        });
        console.log(err);
    }
};
