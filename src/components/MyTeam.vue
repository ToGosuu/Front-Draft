<!-- src/components/MyTeam.vue -->
<template>
    <div class="my-team">
      <h2>Mi Equipo</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Posición</th>
            <th>Media</th>
            <th>Edad</th>
            <th>Contrato</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in team" :key="index">
            <td>{{ player.name }}</td>
            <td>{{ player.position }}</td>
            <td>{{ player.rating }}</td>
            <td>{{ player.age }}</td>
            <td>{{ player.contract }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        team: []
      };
    },
    created() {
      // Fetch team data from the backend
      fetch('/api/my-team')
        .then(response => response.json())
        .then(data => {
          this.team = data;
        });
    }
  };
  </script>
  
  <style scoped>
  .my-team {
    background-color: #333;
    color: #fff;
    padding: 20px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 10px;
  }
  th, td {
    border: 1px solid #fff;
    padding: 10px;
    text-align: left;
  }
  </style>
  