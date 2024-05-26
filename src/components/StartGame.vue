<!-- src/components/StartGame.vue -->
<template>
    <div class="start-game">
      <h2>Iniciar Nueva Partida</h2>
      <button @click="startGame">Iniciar</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      startGame() {
        const playerName = prompt('Ingrese su nombre:');
        if (playerName) {
          this.$emit('start-game', playerName);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .start-game {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
  }
  button {
    background-color: red;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  </style>
  