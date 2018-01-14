import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      apiURI: 'https://api.chucknorris.io/jokes',
      joke: { value: 'test' }
    },
    mutations: {
      setApiURI (state, apiURI) {
        state.apiURI = apiURI
      },
      setJoke (state, joke) {
        state.joke = joke
      }
    },
    actions: {
      getJoke: async function ({ commit }) {
        const { data } = await axios.get(this.state.apiURI + '/random')
        commit('setJoke', data)
      }
    }
  })
}

export default createStore
