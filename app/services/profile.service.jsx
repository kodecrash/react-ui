import http from "../api/http-commons";

class ProfileService {

  saveProfile(data) {
    return http.post("/profile/-MgL-8cdyTxO4KNW2AK8.json", data);
  }

  getProfile() {
    return http.get("/profile/-MgL-8cdyTxO4KNW2AK8.json");
  }

}

export default new ProfileService();