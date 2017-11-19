new Vue({
  el: '#app',
  data: {
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    increment(e, step) {
      this.counter += step;
      console.log(e);
    },
    updateCoordinates(e) {
      this.x = e.clientX;
      this.y = e.clientY;
    }
  }
});