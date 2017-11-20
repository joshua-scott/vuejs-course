new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    phil: 'phil',
    userClass: 'one',
    batmanClass: 'batmanClass',
    trueOrFalse: false,
    sukiStyles: {
      backgroundColor: 'black',
      border: '2px solid green',
      width: '300px',
      height: '400px'
    },
    progress: {
      width: '0%',
      height: '100%',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect() {
      setInterval(() => {
        this.effectClasses.highlight = !this.effectClasses.highlight;
        this.effectClasses.shrink = !this.effectClasses.shrink;
      }, 2000);
    },
    startProgress() {
      let width = 0;
      setInterval(() => {
        width += 5;
        if (width > 100) {
          this.progress.width = '100%';
          this.progress.backgroundColor = 'green';
        } else {
          this.progress.width = `${width}%`;
        }
      }, 100);
    }
  }
});
