<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ userName }}</p>
    <p>User Name reversed: {{ reversedName }}</p>
    <p>User Age: {{ userAge }}</p>
    <p>User Age squared: {{ squaredAge }}</p>
    <button @click="$emit('nameChanged')">Change name from child component</button>
  </div>
</template>

<script>
  export default {
    props: {
      userName: {
        type: String,
        required: true
      },
      userAge: {
        type: Number,
        required: true
      }
    },
    methods: {

    },
    computed: {
      reversedName() {
        return this.userName.split("").reverse().join("");
      },
      squaredAge() {
        return Math.pow(this.userAge, 2);
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
