import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isGridView: true,
    isGallery: true
  },
  mutations: {
    changeView(state) {
      state.isGridView = !state.isGridView;
    },
    changeGalleryFlag(state, flag) {
      state.isGallery = flag;
    }
  },
  actions: {
  },
  modules: {
  }
})
