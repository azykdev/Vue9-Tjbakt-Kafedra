import TeachersService from "../service/teachers.js";

const state = {
  teachers: [],
  teacher: {},
};

const mutations = {
  getTeachersSuccess(state, teachers) {
    state.teachers = teachers;
  },
  getOneTeacherSuccess(state, teacher) {
    state.teacher = teacher;
  },
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

  // getOneTeacher(context, id) {
  //   return new Promise(() => {
  //     TeachersService.getOneTeacher(id).then((res) => {
  //       context.commit("getOneTeacherSuccess", res.data);
  //     });
  //   });
  // },

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
