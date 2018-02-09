<script>
export default {
  name: "FormTextInput",
  props: {
    labelText: String,
    htmlId: String,
    value: String
  },
  data () {
    return {
      inputValue: this.value
    }
  },
  methods: {
    inputEdited () {
      this.$emit("updateValue", this.htmlId, this.inputValue)
    }
  }
}
</script>

<template>
  <div class="form-group">
    <label :for="htmlId">{{ labelText }}</label>
    <input
      type="text"
      class="form-control"
      v-model="inputValue"
      :id="htmlId"
      :placeholder="labelText"
      @keyup="inputEdited">
  </div>
</template>

