import Vue from "vue"
import Vuex from "vuex";
import DataFetcher from '@/api/data-fetcher'

export default {
  state: {
    dataFromInternet: []
  },
  mutations: {
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
}