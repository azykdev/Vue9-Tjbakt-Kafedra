import TeachersService from "../service/teachers.js";

const state = {
  teachers: [],
};

const mutations = {
  getTeachersSuccess(state, teachers) {
    state.teachers = teachers;
  }
};

const actions = {
  // GET
  getTeachers(context) {
    return new Promise(() => {
      TeachersService.getTeachers().then((res) => {
        context.commit("getTeachersSuccess", res.data);
      });
    });
  },

  // POST
  postTeacher(context, teacher) {
    return new Promise((resolve) => {
      TeachersService.postTeacher(teacher).then((res) => {
        resolve(res);
      });
    });
  },

  // PUT
  putTeacher(context, teacher) {
    return new Promise((resolve) => {
      TeachersService.putTeacher(teacher).then((res) => {
        console.log(res);
        resolve(res);
      });
    })
  },

  // DELETE
  deleteTeacher(context, teacher) {
    TeachersService.deleteTeacher(teacher).then((res) => {
      // console.log(res);
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
