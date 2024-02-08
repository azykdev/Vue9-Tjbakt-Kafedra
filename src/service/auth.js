import axios from "./axios";

const AuthService = {
  // Login
  getAdmins() {
    return axios.get("/admins");
  }
}

export default AuthService