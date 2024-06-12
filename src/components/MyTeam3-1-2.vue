<template>
    <div class="my-team-3-1-2">
      <h2>Mi Equipo 3-1-2</h2>
      <div class="team-roster">
        <h3>Plantilla del equipo</h3>
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
            <tr v-for="player in teamRoster" :key="player.id">
              <td>{{ player.name }}</td>
              <td>{{ player.position }}</td>
              <td>{{ player.rating }}</td>
              <td>{{ player.age }}</td>
              <td>{{ player.contract }}</td>
              <td>
                <button @click="offerPlayer(player)">Ofrecer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyTeam312',
    data() {
      return {
        teamRoster: [] // Lista de jugadores del equipo del usuario
      };
    },
    created() {
      // Llama a la función para cargar la plantilla del equipo del usuario
      this.fetchTeamRoster();
    },
    methods: {
      fetchTeamRoster() {
        // Realiza una solicitud al backend para obtener los datos de la plantilla del equipo del usuario
        fetch(`/api/my-team-roster`)
          .then(response => response.json())
          .then(data => {
            this.teamRoster = data;
          })
          .catch(error => {
            console.error('Error al obtener la plantilla del equipo del usuario:', error);
          });
      },
      offerPlayer(player) {
        // Implementa la lógica para ofrecer al jugador
        console.log('Ofrecer jugador:', player);
      }
    }
  };
  </script>
  
  <style scoped>
  .my-team-3-1-2 {
    background-color: #333;
    color: #fff;
    padding: 20px;
  }
  
  .team-roster {
    margin-top: 20px;
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
    background-color: #4CAF50;
    color: white;
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  