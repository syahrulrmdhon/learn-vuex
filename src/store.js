import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Custom titile',
    links: [
      'https://google.com',
      'https://youtube.com',
      'https://linkedin.com'
    ]
  },
  getters: {
    countLinks: state => {
      return state.links.length
    }
  },
  mutations: {
    ADD_LINK: (state, link) => {
      state.links.push(link)
    },
    REMOVE_LINK: (state, link) => {        // Add this:
      state.links.splice(link, 1)
    }
  },
  actions: {
    removeLink: (context, link) => {       // Add this:
      context.commit("REMOVE_LINK", link)
    }
  }
})
