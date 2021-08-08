import http from "../api/http-commons";

class AuthService {

  login() {
    return http.get("/login/-MgZZl140DQ3wNZXws5W.json");
  }

}

export default new AuthService();