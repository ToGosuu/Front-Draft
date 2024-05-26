<!-- src/components/LotteryProbabilities.vue -->
<template>
    <div class="lottery-probabilities">
      <h2>Probabilidades de lotería</h2>
      <div v-for="(prob, index) in probabilities" :key="index" class="probability">
        <label>{{ prob.team }}: {{ prob.chance }}%</label>
      </div>
      <button @click="simulateLottery">Simular lotería</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        probabilities: []
      };
    },
    created() {
      // Fetch probabilities from the backend
      fetch('/api/lottery-probabilities')
        .then(response => response.json())
        .then(data => {
          this.probabilities = data;
        });
    },
    methods: {
      simulateLottery() {
        // Logic to simulate the lottery
      }
    }
  };
  </script>
  
  <style scoped>
  .lottery-probabilities {
    background-color: #333;
    color: #fff;
    padding: 20px;
  }
  .probability {
    margin-bottom: 10px;
  }
  button {
    background-color: red;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  </style>
  