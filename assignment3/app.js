new Vue({
  el: '#exercise',
  data: {
    value: 0,
    duration: 5
  },
  computed: {
    result() {
      return this.value >= 37 ?
        'Done' :
        'Not there yet';
    }
  },
  watch: {
    result() {
      const vm = this;
      setTimeout(() => {
        vm.value = 0;
      }, vm.duration * 1000);
    }
  }
})