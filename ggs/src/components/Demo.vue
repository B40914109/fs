<template>
    <input v-model="computedValue">
  </template>
  
  <script>
  export default {
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    computed: {
      computedValue: {
        get() {
          return this.value.toUpperCase();
        },
        set(newValue) {
          const lowerCaseValue = newValue.toLowerCase();
          this.$emit('update:value', lowerCaseValue);
        }
      }
    }
  }
  </script>