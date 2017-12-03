<template>
    <div class="container">
        <app-header />
        <servers />
        <app-footer />
    </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Servers from './components/Servers.vue';

  export default {
    components: {
      appHeader: Header,
      appFooter: Footer,
      Servers
    }
  }
</script>

<style>

</style>
