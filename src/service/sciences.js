import axios from "./axios";

const SciencesService = {
  // GET
  getSciences() {
    return axios.get("/sciences");
  },

  // POST
  postScience(sciences) {
    return axios.post("/sciences", sciences);
  },

  // PUT
  putScience(sciences) {
    return axios.put(`/sciences/${sciences.id}`, sciences);
  },

  // DELETE
  deleteScience(sciences) {
    return axios.delete(`/sciences/${sciences.id}`);
  }
};

export default SciencesService;