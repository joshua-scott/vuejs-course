new Vue({
  el: '#first',
  data: {
    show: false
  }
});

new Vue({
  el: '#second',
  data: {
    show: false
  }
});

new Vue({
  el: '#third',
  data: {
    techStack: [ 'Vue.js frontend', 'Node.js backend', 'MongoDB database', 'Bulma CSS framework', 'Figma design tool']
  }
})

new Vue({
  el: '#forth',
  data: {
    persons: {
      phil: {
        name: 'Phil',
        age: 50,
        hair: 'blue',
        feet: 'huge'
      },
      suki: {
        name: 'Suki',
        age: 84,
        hair: 'black',
        feet: 'paws'
      },
      jeff: {
        name: 'Jeff',
        age: 2,
        hair: 'no',
        feet: 'tiny'
      }
    }
  }
})