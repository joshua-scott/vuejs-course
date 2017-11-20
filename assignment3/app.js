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
      setTimeout(() => {
        this.value = 0;
      }, this.duration * 1000);
    }
  }
})