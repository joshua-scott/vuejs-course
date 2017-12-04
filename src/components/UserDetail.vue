<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ myName }}</p>
    <p>User Name reversed: {{ reversedName }}</p>
    <button @click="$emit('nameChanged')">Change name from child component</button>
  </div>
</template>

<script>
  export default {
    props: {
      myName: {
        type: String,
        required: true
      }
    },
    methods: {

    },
    computed: {
      reversedName() {
        return this.myName.split("").reverse().join("");
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
