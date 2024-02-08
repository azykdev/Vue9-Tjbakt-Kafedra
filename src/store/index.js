import { createStore } from 'vuex'
import admin from '@/modules/admin'
import teachers from '@/modules/teachers'

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {admin, teachers},
})

export default store