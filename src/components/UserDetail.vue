<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ myName }}</p>
    <p>User Name reversed: {{ reversedName }}</p>
    <button @click="swapMarioZelda">Switch between Mario and Zelda</button>
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
      swapMarioZelda() {
        if (['Mario', 'Luigi'].includes(this.myName)) {
          this.myName = 'Link';
        } else {
          this.myName = 'Mario';
        }
        this.$emit('nameChanged', this.myName);
      }
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
