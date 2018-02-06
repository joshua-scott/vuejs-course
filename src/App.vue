<template lang="pug">
  div(class="container")
    div(class="row")
      div(class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3")
        h2 Built-in Directives
        p(v-text="'v-text outputs text'")
        p(v-html="'<strong>v-html</strong> parses html'")
    div(class="row")
      div(class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3")
        h2 Custom Directives
        p(v-highlight:background="'yellow'") Color this (global directive)
        p(v-customOn:mouseout="doTheThing") 'v-on' reimplemented using a local custom directive
</template>

<script>
  export default {
    methods: {
      doTheThing () {
        alert('Hello')
      }
    },
    directives: {
      customOn: {
        inserted (el, binding) {
          el.addEventListener(binding.arg, binding.value)
        }
      }
    }
  }
</script>

<style>

</style>