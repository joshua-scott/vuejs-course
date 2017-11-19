new Vue({
	el: '#exercise',
  data: {
    name: 'Joshua',
    age: 27,
    coolPhoto: 'https://images.unsplash.com/photo-1466495227171-d05d7e3ac2b3?auto=format&fit=crop&w=2001&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
  },
  methods: {
    random: function() {
      return Math.random();
    }
  }
});