<template>
  <div id="app">
    <h2>Thats results</h2>
    <results-list/>
  </div>
</template>

<script>
import ResultsList from './components/ResultsList'

export default {
  name: 'Results',
  components: {
    'results-list': ResultsList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
