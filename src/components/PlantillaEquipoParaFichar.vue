<template>
    <div class="team-roster">
      <h2>Plantilla del equipo {{ selectedTeam }}</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Posición</th>
            <th>Media</th>
            <th>Edad</th>
            <th>Contrato</th>
            <th>Acciones</th>
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
              <button @click="signPlayer(player)">Fichar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PlantillaEquipoParaFichar',
    props: {
      selectedTeam: String // Equipo seleccionado para fichar un jugador
    },
    data() {
      return {
        teamRoster: [] // Lista de jugadores del equipo seleccionado
      };
    },
    created() {
      // Llama a la función para cargar la plantilla del equipo seleccionado
      this.fetchTeamRoster();
    },
    methods: {
      fetchTeamRoster() {
        // Realiza una solicitud al backend para obtener los datos de la plantilla del equipo seleccionado
        fetch(`/api/team-roster/${this.selectedTeam}`)
          .then(response => response.json())
          .then(data => {
            this.teamRoster = data;
          })
          .catch(error => {
            console.error('Error al obtener la plantilla del equipo:', error);
          });
      },
      signPlayer(player) {
        // Implementa la lógica para fichar al jugador
        console.log('Fichar jugador:', player);
      }
    }
  };
  </script>
  
  <style scoped>
  .team-roster {
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
  
  