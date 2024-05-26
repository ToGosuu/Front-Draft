<template>
    <div class="draft-lottery">
      <h2>Lotería del DRAFT</h2>
      <ul>
        <li v-for="(team, index) in teams" :key="index">{{ index + 1 }}. {{ team }}</li>
      </ul>
      <button @click="goToDraft">Pasar al DRAFT</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        teams: [
          'Equipo 1', 'Equipo 2', 'Equipo 3',
          // agrega los demás equipos
        ]
      };
    },
    methods: {
      goToDraft() {
        // Lógica para pasar al draft
      }
    }
  };
  </script>
  
  <style scoped>
  .draft-lottery {
    background-color: #333;
    color: #fff;
    padding: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 5px;
  }
  button {
    background-color: red;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  </style>
  