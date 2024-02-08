import { createStore } from 'vuex'
import teachers from '@/modules/teachers'
import sciences from '@/modules/sciences'

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {teachers, sciences},
})

export default store