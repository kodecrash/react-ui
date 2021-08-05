import http from "../api/http-commons";

class AppointmentService {

  getAppointmentListing() {
    return http.get("/appointments.json");
  }

}

export default new AppointmentService();