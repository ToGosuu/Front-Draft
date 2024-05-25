<template>
    <div class="container">
      <h1 class="title">Mi Equipo</h1>
      <div class="team-info">
        <h2>{{ selectedTeam.name }}</h2>
        <p>{{ selectedTeam.city }}, {{ selectedTeam.nickname }}</p>
        <p>{{ selectedTeam.conference }} Conference</p>
        <p>{{ selectedTeam.division }} Division</p>
      </div>
      <div class="players-list">
        <h2>Jugadores</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Posición</th>
              <th>Altura</th>
              <th>Peso</th>
              <!-- Agregar más columnas según la información necesaria -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(player, index) in selectedTeam.players" :key="index">
              <td>{{ player.name }}</td>
              <td>{{ player.position }}</td>
              <td>{{ player.height }}</td>
              <td>{{ player.weight }}</td>
              <!-- Agregar más columnas según la información necesaria -->
            </tr>
          </tbody>
        </table>
      </div>
      <div class="buttons">
        <button @click="nextStep">Siguiente Paso</button>
        <!-- Agregar más botones según las acciones necesarias -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      selectedTeam: {
        type: Object,
        required: true
      }
    },
    methods: {
      nextStep() {
        // Lógica para avanzar al siguiente paso
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
  
  .team-info {
    margin-bottom: 20px;
  }
  
  .players-list {
    margin-bottom: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 10px;
    border: 1px solid #ddd;
  }
  
  th {
    background-color: #007bff;
    color: #fff;
  }
  
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  .buttons {
    margin-top: 20px;
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
  