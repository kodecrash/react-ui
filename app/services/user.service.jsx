import http from "../api/http-commons";

class UserService {

  getAllUsers() {
    return http.get("/users");
  }

}

export default new UserService();