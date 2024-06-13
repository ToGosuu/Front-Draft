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
    <div v-if="selectedPlayer">
      <p>Has seleccionado a {{ selectedPlayer.name }} con un valor de {{ selectedPlayer.value }}.</p>
      <button @click="goToMyTeam">Ir a Mi Equipo</button>
      <button @click="goToTrades">Ir a Traspasos</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlantillaEquipoParaFichar',
  props: {
    selectedTeam: String
  },
  data() {
    return {
      teamRoster: [], // Lista de jugadores del equipo seleccionado
      selectedPlayer: null // Jugador seleccionado por el usuario
    };
  },
  created() {
    this.fetchTeamRoster();
  },
  methods: {
    fetchTeamRoster() {
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
      fetch(`/api/player-value/${player.id}`)
        .then(response => response.json())
        .then(data => {
          this.selectedPlayer = { ...player, value: data.value };
        })
        .catch(error => {
          console.error('Error al obtener el valor del jugador:', error);
        });
    },
    goToMyTeam() {
      this.$router.push({ name: 'MyTeam312' });
    },
    goToTrades() {
      this.$router.push({ name: 'TraspasosComponent' });
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
