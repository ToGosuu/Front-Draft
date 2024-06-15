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
        <tr v-for="player in team" :key="player.id">
          <td>{{ player.name }}</td>
          <td>{{ player.position }}</td>
          <td>{{ player.rating }}</td>
          <td>{{ player.age }}</td>
          <td>{{ player.contract }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="goToTraspasos">Ir a Traspasos</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [] // Lista de jugadores del equipo seleccionado
    };
  },
  created() {
    // Utilizamos el teamId específico
    const teamId = "665cff7fda591cb24e7fd18c";
    this.fetchTeamData(teamId);
  },
  methods: {
    fetchTeamData(teamId) {
      // Realiza la solicitud al backend para obtener los datos del equipo específico por su ID
      fetch(`http://localhost:3001/api/1.0/playersTeam/${teamId}`)
        .then(response => response.json())
        .then(data => {
          this.team = data.players; // Suponiendo que el backend devuelve los jugadores del equipo dentro de un objeto 'players'
        })
        .catch(error => {
          console.error('Error al obtener el equipo:', error);
        });
    },
    goToTraspasos() {
      // Navegar a la ruta TraspasosComponent
      this.$router.push({ name: 'TraspasosComponent' });
    }
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
button {
  background-color: red;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
button:disabled {
  background-color: gray;
  cursor: not-allowed;
}
</style>
