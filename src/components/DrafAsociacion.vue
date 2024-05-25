<template>
    <div class="container">
      <h1 class="title">Draft de la Asociación</h1>
      <div class="players-list">
        <div v-for="(player, index) in drafteablePlayers" :key="index" class="player-item">
          <p>{{ player.name }}</p>
          <p>{{ player.position }}</p>
          <p>{{ player.college }}</p>
          <button @click="draftear(player)">Draftear</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drafteablePlayers: [
          // Aquí se incluirían los jugadores drafteables con sus detalles
        ]
      };
    },
    methods: {
      draftear(player) {
        // Lógica para draftear al jugador seleccionado
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
  }
  
  .title {
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  .players-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .player-item {
    margin: 10px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  