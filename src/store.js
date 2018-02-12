import Vue from "vue"
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form: []
  },
  mutations: {
    registerElement (state, element) {
      state.form.push(element)
    },
    changeValue (state, obj) {
      state.form.find( (el) => (el.htmlId === obj.id) ).value = obj.val
    }
  }
})