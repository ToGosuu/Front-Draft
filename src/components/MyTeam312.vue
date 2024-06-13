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
            <th>Acción</th>
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
      teamRoster: [], // Lista de jugadores del equipo del usuario
      selectedTeam: '123' // Ejemplo: ID del equipo seleccionado, podrías obtenerlo de la autenticación o donde sea necesario
    };
  },
  created() {
    this.fetchTeamRoster(this.selectedTeam); // Llama al método para obtener la plantilla del equipo
  },
  methods: {
    fetchTeamRoster(teamId) {
      // Realiza la solicitud al backend para obtener la plantilla del equipo filtrada por teamId
      fetch(`/api/teams/${teamId}/players`)
        .then(response => response.json())
        .then(data => {
          this.teamRoster = data.players; // Asumiendo que el backend devuelve los jugadores dentro de un objeto 'players'
        })
        .catch(error => {
          console.error('Error al obtener la plantilla del equipo:', error);
        });
    },
    offerPlayer(player) {
      // Implementa la lógica para ofrecer al jugador
      console.log('Ofrecer jugador:', player);

      // Ejemplo de acción que podrías realizar:
      fetch(`/api/offer-player`, {
        method: 'POST',
        body: JSON.stringify(player),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        // Maneja la respuesta del backend según el contexto de tu aplicación
        console.log('Respuesta del backend:', data);
        
        // Ejemplo de navegación basada en la respuesta del backend
        if (data.success) {
          // Si la oferta fue exitosa, navegar a una página de confirmación o realizar otra acción
          // Ejemplo: redirigir a la ventana PlantillaEquipoParaFichar si hay un equipo seleccionado
          if (this.selectedTeam) {
            this.$router.push({ name: 'PlantillaEquipoParaFichar', params: { selectedTeam: this.selectedTeam } });
          } else {
            // Mostrar opciones para ir a TraspasosComponent si no hay un equipo seleccionado
            this.$router.push({ name: 'TraspasosComponent' });
          }
        } else {
          // Manejar el caso de error o falla en la oferta, mostrar mensaje de error, etc.
          console.error('Error al procesar la oferta:', data.error);
        }
      })
      .catch(error => {
        console.error('Error al ofrecer al jugador:', error);
      });
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
