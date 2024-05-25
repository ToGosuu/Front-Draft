<template>
    <div class="container">
      <h1 class="title">Traspasos</h1>
      <div class="available-players">
        <h2>Jugadores Disponibles para Fichar</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Posición</th>
              <th>Equipo</th>
              <!-- Agregar más columnas según la información necesaria -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(player, index) in availablePlayers" :key="index">
              <td>{{ player.name }}</td>
              <td>{{ player.position }}</td>
              <td>{{ player.team }}</td>
              <!-- Agregar más columnas según la información necesaria -->
            </tr>
          </tbody>
        </table>
      </div>
      <div class="my-players">
        <h2>Mis Jugadores Disponibles para Traspasar</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Posición</th>
              <th>Equipo</th>
              <!-- Agregar más columnas según la información necesaria -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(player, index) in myPlayers" :key="index">
              <td>{{ player.name }}</td>
              <td>{{ player.position }}</td>
              <td>{{ player.team }}</td>
              <!-- Agregar más columnas según la información necesaria -->
            </tr>
          </tbody>
        </table>
      </div>
      <div class="buttons">
        <button @click="draft">Pasar al Draft</button>
        <button @click="sign">Fichar</button>
        <button @click="backToTeam">Equipo</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        availablePlayers: [],
        myPlayers: []
      };
    },
    methods: {
      draft() {
        // Lógica para pasar al draft
      },
      sign() {
        // Lógica para fichar jugadores
      },
      backToTeam() {
        // Lógica para volver a la página de Mi Equipo
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
  
  .available-players,
  .my-players {
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
  