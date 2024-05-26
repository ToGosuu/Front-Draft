<template>
    <div class="lottery-simulator">
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
        probabilities: [
          { team: '1. Equipo', chance: 25.0 },
          { team: '2. Equipo', chance: 19.9 },
          // agrega los demás equipos
        ]
      };
    },
    methods: {
      simulateLottery() {
        // Lógica para simular la lotería
      }
    }
  };
  </script>
  
  <style scoped>
  .lottery-simulator {
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
  