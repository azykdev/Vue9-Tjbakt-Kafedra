import SciencesService from "@/service/sciences";

const state = {
  sciences: [],
};

const mutations = {
  getSciencesSuccess(state, sciences) {
    state.sciences = sciences;
  },
};

const actions = {
  // GET
  getSciences(context) {
    return new Promise(() => {
      SciencesService.getSciences().then((res) => {
        context.commit("getSciencesSuccess", res.data);
      });
    });
  },

  // POST
  postScience(context, sciences) {
    return new Promise((resolve) => {
      SciencesService.postScience(sciences).then((res) => {
        resolve(res);
      });
    });
  },

  // PUT
  putScience(context, sciences) {
    return new Promise((resolve) => {
      SciencesService.putScience(sciences).then((res) => {
        console.log(res);
        resolve(res);
      });
    });
  },

  // DELETE
  deleteScience(context, sciences) {
    SciencesService.deleteScience(sciences).then((res) => {
      // console.log(res);
    });
  },
};

export default {
  state,
  mutations,
  actions,
};