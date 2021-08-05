import * as actionTypes from './actionTypes';
import appointmentService from '../services/appointment.service';


export const getAllAppointments = () => async (dispatch) => {
    try {
      const res = await appointmentService.getAppointmentListing();
  
      dispatch({
        type: actionTypes.GET_ALL_APPOINTEMTNS,
        payload: res.data,
      });
      
    } catch (err) {
      console.log(err);
    }
};
