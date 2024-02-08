import AuthService from "@/service/auth";

const state = {
  admins: [],
};

const mutations = {
  getAdminsSuccess(state, admins) {
    state.admins = admins;
  }
};

const actions = {
  getAdmins(context) {
    return new Promise(() => {
      AuthService.getAdmins().then((res) => {
        context.commit("getAdminsSuccess", res.data);
      })
    })
  }
};

export default {
  state,
  mutations,
  actions,
}