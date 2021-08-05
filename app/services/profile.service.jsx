import http from "../api/http-commons";

class ProfileService {

  saveProfile(data) {
    return http.post("/profile.json", data);
  }

}

export default new ProfileService();