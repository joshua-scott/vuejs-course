<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Please select a server</p>
    <p v-else>Server #{{ server.id }} selected, Status {{ server.status }}</p>
    <hr>
    <button @click="changeStatus">Change server status</button>
  </div>
</template>

<script>
  import { serverBus } from '../../main';
  export default {
    data() {
      return {
        server: null
      }
    },
    methods: {
      changeStatus() {
        // since objects are passed by reference, just this is enough
        this.server.status = this.server.status === 'Normal' 
          ? 'Critical'
          : 'Normal'
      }
    },
    created() {
      serverBus.$on('serverSelected', (server) => {
        this.server = server;
      });
    }
  }
</script>

<style>
</style>
