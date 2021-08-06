import * as actionTypes from './actionTypes';
import profileService from '../services/profile.service';


export const saveProfile = (profileData) => async (dispatch) => {
    try {
      const res = await profileService.saveProfile(profileData);
       if (res) {
        dispatch({
            type: actionTypes.SAVE_PROFILE_SUCCESS,
            payload: res.data,
        });
       }
        
    } catch (err) {
      console.log(err);
      dispatch({
        type: actionTypes.SAVE_PROFILE_FAILED,
        payload: null,
      });
    }
};


export const getProfile = () => async (dispatch) => {
  try {
    const res = await profileService.getProfile();
    if (res) {
      dispatch({
        type: actionTypes.GET_PROFILE_SUCCESS,
        payload: res.data,
      });
    }
    
  } catch (err) {
    console.log(err);
    dispatch({
      type: actionTypes.GET_PROFILE_FAILED,
      payload: null,
    });
  }
};