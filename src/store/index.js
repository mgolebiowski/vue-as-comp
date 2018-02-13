import Vue from "vue"
import Vuex from "vuex";
import FormModule from './modules/form'
import InternetModule from './modules/internet'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    FormModule,
    InternetModule
  }
})