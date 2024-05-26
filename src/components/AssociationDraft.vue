<!-- src/components/AssociationDraft.vue -->
<template>
    <div class="association-draft">
      <h2>DRAFT de la asociación</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Posición</th>
            <th>Media</th>
            <th>Edad</th>
            <th>Equipo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in players" :key="index" @click="draftPlayer(player)">
            <td>{{ player.name }}</td>
            <td>{{ player.position }}</td>
            <td>{{ player.rating }}</td>
            <td>{{ player.age }}</td>
            <td>{{ player.team }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        players: []
      };
    },
    created() {
      // Fetch draft players from the backend
      fetch('/api/draft-players')
        .then(response => response.json())
        .then(data => {
          this.players = data;
        });
    },
    methods: {
      draftPlayer(player) {
        // Send selected player to the backend
        fetch('/api/draft-player', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(player)
        })
        .then(response => response.json())
        .then(data => {
          // Handle response data
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .association-draft {
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
  tbody tr {
    cursor: pointer;
  }
  tbody tr:hover {
    background-color: #444;
  }
  </style>
  