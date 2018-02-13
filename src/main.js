// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Results from './Results'
import Form from './Form'
import Posts from './Posts'
import "jquery"
import "bootstrap-sass/assets/stylesheets/_bootstrap.scss"
import "imports-loader?$=jquery,jQuery=jquery!bootstrap-sass/assets/javascripts/bootstrap"

Vue.config.productionTip = false

import store from "./store";

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

new Vue({
  el: '#posts',
  store,
  components: { Posts },
  template: '<Posts/>'
})