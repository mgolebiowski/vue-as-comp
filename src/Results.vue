<template lang="pug">
  #results
    h2 Thats results
    ResultsList
    div
      h2 Thats data from internet:
      p(v-if="!dataFromInternet.length") Please wait...
      .panel.panel-default.list-from-internet(:key="post.id" v-for="post in dataFromInternet")
        .panel-heading
          h3.panel-title {{post.title}}
        .panel-body
          p {{post.body}}

</template>

<script>
import ResultsList from './components/ResultsList'

export default {
  name: 'Results',
  components: {
    ResultsList
  },
  created () {
    this.$store.dispatch('fetchData')
  },
  computed: {
    dataFromInternet () {
      return this.$store.state.InternetModule.dataFromInternet
    }
  }
}
</script>

<style scope>
#results {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.list-from-internet .title{
  font-weight: bold;
}

.panel{
  text-align: left;
}
</style>
