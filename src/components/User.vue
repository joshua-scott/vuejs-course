<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change name from parent component</button>
    <p>The name is now {{ name }}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail 
          :userName="name"
          @nameChanged="changeName"
          :userAge="age"
        />
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit 
          :userAge="age"
          :incrementAge="incrementAge"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import UserDetail from './UserDetail.vue';
  import UserEdit from './UserEdit.vue';

  export default {
    components: {
      appUserDetail: UserDetail,
      appUserEdit: UserEdit
    },
    data() {
      return {
        name: 'Mario',
        age: 27
      }
    },
    methods: {
      changeName() {
        this.name = this.name === 'Mario' ? 'Luigi' : 'Mario';
      },
      incrementAge() {
        this.age++;
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightblue;
  }
</style>
