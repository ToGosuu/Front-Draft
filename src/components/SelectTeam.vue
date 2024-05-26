<template>
    <div class="select-team">
      <h2>Selecciona equipo</h2>
      <div class="teams">
        <div v-for="team in 30" :key="team" class="team"></div>
      </div>
      <button @click="selectTeam">Seleccionar</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      selectTeam() {
        // Lógica para seleccionar un equipo
      }
    }
  };
  </script>
  
  <style scoped>
  .select-team {
    background-color: #333;
    color: #fff;
    padding: 20px;
  }
  .teams {
    display: flex;
    flex-wrap: wrap;
  }
  .team {
    width: 50px;
    height: 50px;
    background-color: #777;
    margin: 5px;
  }
  button {
    background-color: red;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  </style>
  