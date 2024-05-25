<template>
    <div class="container">
      <h1 class="title">Mi Equipo</h1>
      <div class="team-info">
        <h2>{{ selectedTeam.name }}</h2>
        <p>Entrenador: {{ selectedTeam.coach }}</p>
        <p>Ciudad: {{ selectedTeam.city }}</p>
        <p>Conferencia: {{ selectedTeam.conference }}</p>
        <p>División: {{ selectedTeam.division }}</p>
      </div>
      <table class="players-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Posición</th>
            <th>Edad</th>
            <th>Altura</th>
            <th>Peso</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in selectedTeam.players" :key="index">
            <td>{{ player.name }}</td>
            <td>{{ player.position }}</td>
            <td>{{ player.age }}</td>
            <td>{{ player.height }}</td>
            <td>{{ player.weight }}</td>
          </tr>
        </tbody>
      </table>
      <div class="buttons">
        <button @click="pasarAlDraft">Pasar al Draft</button>
        <button @click="verTraspasos">Ver Traspasos</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedTeam: {
          name: 'Nombre del Equipo',
          coach: 'Nombre del Entrenador',
          city: 'Ciudad del Equipo',
          conference: 'Conferencia',
          division: 'División',
          players: [
            // Aquí se incluirían los jugadores del equipo con sus detalles
          ]
        }
      };
    },
    methods: {
      pasarAlDraft() {
        // Lógica para pasar al draft
      },
      verTraspasos() {
        // Lógica para ver los traspasos del equipo
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
  
  .players-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  
  .players-table th,
  .players-table td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  .players-table th {
    background-color: #f2f2f2;
  }
  
  .buttons {
    display: flex;
    justify-content: center;
  }
  
  button {
    margin: 0 10px;
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
  