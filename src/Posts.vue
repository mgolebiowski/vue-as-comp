<script>
export default {
  name: 'Posts',
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

<template lang="pug">
  div#posts
    h2 Thats data from internet:
    p(v-if="!dataFromInternet.length") Please wait...
    .panel.panel-default.list-from-internet(:key="post.id" v-for="post in dataFromInternet")
      .panel-heading
        h3.panel-title {{post.title}}
      .panel-body
        p {{post.body}}
</template>

<style scoped>
.list-from-internet .title{
  font-weight: bold;
}

.panel{
  text-align: left;
}
</style>

