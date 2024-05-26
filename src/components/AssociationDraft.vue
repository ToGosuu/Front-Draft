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
          <tr v-for="(player, index) in players" :key="index">
            <td>{{ player.name }}</td>
            <td>{{ player.position }}</td>
            <td>{{ player.rating }}</td>
            <td>{{ player.age }}</td>
            <td>{{ player.team }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="draftPlayer">Draftear</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        players: [
          { name: 'Jugador 1', position: 'G', rating: 70, age: 21, team: 'Equipo 1' },
          // agrega los demás jugadores
        ]
      };
    },
    methods: {
      draftPlayer() {
        // Lógica para draftear un jugador
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
  button {
    background-color: red;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  </style>
  