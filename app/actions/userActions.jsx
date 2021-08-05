import * as actionTypes from './actionTypes';
import userService from '../services/user.service';


export const getAllUsers = () => async (dispatch) => {
    try {
      const res = await userService.getAllUsers();
  
      dispatch({
        type: actionTypes.GET_ALL_USERS,
        payload: res.data,
      });
      
    } catch (err) {
      console.log(err);
    }
};
