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
      team: []
    };
  },
  created() {
    this.fetchTeamData();
  },
  methods: {
    fetchTeamData() {
      // Realiza una solicitud al backend para obtener los datos del equipo
      fetch('/api/my-team')
        .then(response => response.json())
        .then(data => {
          this.team = data;
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
