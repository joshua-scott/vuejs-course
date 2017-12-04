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
          :myName="name"
          @nameChanged="changeName"
        />
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit />
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
        name: 'Mario'
      }
    },
    methods: {
      changeName() {
        this.name = this.name === 'Mario' ? 'Luigi' : 'Mario';
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightblue;
  }
</style>
