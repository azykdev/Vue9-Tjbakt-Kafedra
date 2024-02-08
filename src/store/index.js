import { createStore } from 'vuex'
import teachers from '@/modules/teachers'
import sciences from '@/modules/sciences'
import news from '@/modules/news'

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {teachers, sciences, news},
})

export default store