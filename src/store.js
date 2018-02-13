import Vue from "vue"
import Vuex from "vuex";
import DataFetcher from './data-fetcher'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form: [],
    dataFromInternet: []
  },
  mutations: {
    registerElement (state, element) {
      state.form.push(element)
    },
    changeValue (state, obj) {
      state.form.find( (el) => (el.htmlId === obj.id) ).value = obj.val
    },
    pushData (state, data) {
      state.dataFromInternet = data
    }
  },
  actions: {
    fetchData (context) {
      const url = 'https://jsonplaceholder.typicode.com/users/1/posts'
      const dataFetcher = new DataFetcher({ url })
      dataFetcher.on('done', () => {
        this.commit('pushData', dataFetcher.data)
      })
      dataFetcher.updateWithTimeout()
    }
  }
})