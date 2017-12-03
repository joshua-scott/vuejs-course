<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change my Name</button>
    <p>The name is now {{ name }}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail 
          :myName="name"
          :myGame="game"
          @nameChanged="updateGame"
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
        name: 'Mario',
        game: 'Mario'
      }
    },
    methods: {
      updateGame() {
        this.game = this.game === 'Mario' ? 'Zelda' : 'Mario';
        this.changeName();
      },
      changeName() {
        if (this.game === 'Mario') {
          this.name = this.name === 'Mario' ? 'Luigi' : 'Mario';
        } else {
          this.name = this.name === 'Link' ? 'Zelda' : 'Link';
        }
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightblue;
  }
</style>
