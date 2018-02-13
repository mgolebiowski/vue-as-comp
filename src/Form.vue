<template lang="pug">
  #app
    h2 Thats Form
    form
      FormTextInput(@updateValue="updateElValue" :value="text1.value" :label-text="text1.labelText" :html-id="text1.htmlId")
      FormTextInput(@updateValue="updateElValue" :value="text2.value" :label-text="text2.labelText" :html-id="text2.htmlId")
</template>

<script>
import FormTextInput from './components/FormTextInput'

export default {
  name: 'Form',
  components: {
    FormTextInput
  },
  data () {
    return {
      text1: {
        labelText: "Awsome text input",
        htmlId: "individual_input",
        value: "hello world"
      },
      text2: {
        labelText: "Another awsome text input",
        htmlId: "more_indiv_inp",
        value: "Zdrastuj'tie!"
      }
    }
  },
  created () {
    this.$store.commit('registerElement', this.text1)
    this.$store.commit('registerElement', this.text2)
  },
  methods: {
    updateElValue (elId, elValue) {
      this.$store.commit('changeValue', {id: elId, val: elValue})
    }
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
form{
  text-align: left;
}
</style>
