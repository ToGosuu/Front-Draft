<template>
    <div class="container">
      <h1 class="title">Equipo Seleccionado</h1>
      <h2>{{ selectedTeam.name }}</h2>
      <div class="team-info">
        <p><strong>Ciudad:</strong> {{ selectedTeam.city }}</p>
        <p><strong>Entrenador:</strong> {{ selectedTeam.coach }}</p>
        <p><strong>Estadio:</strong> {{ selectedTeam.stadium }}</p>
        <!-- Agregar más información del equipo si es necesario -->
      </div>
      <h2>Jugadores del Equipo</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Posición</th>
            <th>Edad</th>
            <!-- Agregar más columnas según la información necesaria -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in selectedTeam.players" :key="index">
            <td>{{ player.name }}</td>
            <td>{{ player.position }}</td>
            <td>{{ player.age }}</td>
            <!-- Agregar más columnas según la información necesaria -->
          </tr>
        </tbody>
      </table>
      <div class="buttons">
        <button @click="backToTrades">Traspasos</button>
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
      backToTrades() {
        // Lógica para volver a la página de Traspasos
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
  