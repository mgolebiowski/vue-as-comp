<script>
export default {
  name: 'ResultsList',
  data () {
    return {
      formArray: this.$store.state.form
    }
  }
}
</script>

<template>
  <div class="form_elements">
    <p :key="el.htmlId" v-for="el in formArray" >{ id:"{{el.htmlId}}" label:"{{ el.labelText }}" value:"{{ el.value }}" }</p>
  </div>
</template>
