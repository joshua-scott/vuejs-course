new Vue({
  el: '#app',
  data: {
    isPlaying: false,
    playerHealth: 100,
    monsterHealth: 100,
    events: []
  },
  methods: {
    startGame() {
      this.isPlaying = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.events = [];
    },
    randomAttackDamage(max) {
      return Math.floor(Math.random() * max + 1);
    },
    addEvent(action, actor, receiver, amount) {
      this.events.unshift({
        action,
        actor,
        receiver,
        amount
      });
    },
    attack(attackType) {
      const maxDamage = attackType === 'special' ? 30 : 15;
      const actualDamage = this.randomAttackDamage(maxDamage);
      this.monsterHealth -= actualDamage;
      this.addEvent('attack', 'player', 'monster', actualDamage);
      this.monsterAttack();
    },
    monsterAttack() {
      const actualDamage = this.randomAttackDamage(15);
      this.playerHealth -= actualDamage;
      this.addEvent('attack', 'monster', 'player', actualDamage);
      this.checkForEndGame();
    },
    heal() {
      const amountHealed = 10;
      this.playerHealth += amountHealed;
      if (this.playerHealth > 100) this.playerHealth = 100;
      this.addEvent('heal', 'player', 'player', amountHealed);
      this.monsterAttack();
    },
    checkForEndGame() {
      if (this.playerHealth > 0 && this.monsterHealth > 0) return;
      
      if (this.monsterHealth <= 0) {
        alert('You win!');
      } else if (this.playerHealth <= 0) {
        alert('You lose!');
      }
      this.startGame();
    }
  }
});