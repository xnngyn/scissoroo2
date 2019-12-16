import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

    state: {
        componentState: 'HomeText'
    },

    mutations: {
        changeComponent(state, payload) {
            state.componentState = componentState
            }

    },

    getters: {
      componentState:  state => state.componentState
    }
})
