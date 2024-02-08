import axios from "./axios.js";

const TeachersService = {
  // GET
  getTeachers() {
    return axios.get("/teachers");
  },
  getOneTeacher(id) {
    return axios.get(`/teachers/${id}`);
  },

  // POST
  postTeacher(teacher) {
    return axios.post("/teachers", teacher);
  },

  // PUT
  putTeacher(teacher) {
    return axios.put(`/teachers/${teacher.id}`, teacher);
  },

  // DELETE
  deleteTeacher(teacher) {
    return axios.delete(`/teachers/${teacher.id}`);
  },
};

export default TeachersService;
