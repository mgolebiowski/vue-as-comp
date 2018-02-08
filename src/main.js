// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Results from './Results'
import Form from './Form'
import "jquery"
import "bootstrap-sass/assets/stylesheets/_bootstrap.scss"
import "imports-loader?bootstrap-sass/assets/javascripts/bootstrap"

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#results',
  store,
  components: { Results },
  template: '<Results/>'
})

new Vue({
  el: '#form',
  store,
  components: { Form },
  template: '<Form/>'
})