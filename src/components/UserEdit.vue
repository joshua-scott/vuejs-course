<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <button @click="incrementAge()">Increment age</button>
  </div>
</template>

<script>
  export default {
    props: ['incrementAge']
  }
</script>

<style scoped>
  div {
    background-color: lightgreen;
  }
</style>
