<template>
  <div class="choose-team-to-sign">
    <h2>Selecciona un equipo para fichar un jugador</h2>
    <div class="teams">
      <div
        class="team-container"
        v-for="(team, index) in teams"
        :key="index"
        @click="selectTeam(team)"
        @mouseenter="hoverTeam(team)"
        @mouseleave="hoverTeam(null)"
        :class="{ selected: selectedTeam === team }"
      >
        <img
          :src="getTeamImage(team)"
          :alt="'Escudo del equipo ' + team"
          class="team-logo"
        />
        <span v-if="hoveredTeam === team" class="team-name">{{ team }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChooseTeamToSign',
  data() {
    return {
      teams: [],
      selectedTeam: null,
      hoveredTeam: null
    };
  },
  created() {
    // Cuando se crea el componente, cargar la lista de equipos desde el backend
    this.fetchTeams();
  },
  methods: {
    fetchTeams() {
      // Realiza una solicitud GET para obtener la lista de equipos desde el backend
      fetch('http://localhost:3001/api/1.0/nameTeam')
        .then(response => response.json())
        .then(data => {
          this.teams = data.teams; // Suponiendo que el backend devuelve un objeto con una propiedad 'teams'
        })
        .catch(error => {
          console.error('Error al obtener la lista de equipos:', error);
        });
    },
    selectTeam(team) {
      this.selectedTeam = team;
      console.log(`Equipo seleccionado para fichar: ${team}`);
      this.sendSelectedTeamToBackend(team);
    },
    sendSelectedTeamToBackend(team) {
      // Simulamos una solicitud POST al backend utilizando fetch
      fetch('/api/seleccion-equipo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ selectedTeam: team })
      })
        .then(response => {
          if (response.ok) {
            console.log('Selección de equipo enviada al backend correctamente.');
            // Después de enviar al backend, redirige al usuario a la página de PlantillaEquipoParaFichar
            this.$router.push({ name: 'PlantillaEquipoParaFichar', params: { teamId: team.id } });
          } else {
            console.error('Error al enviar la selección de equipo al backend.');
            // Manejo de errores si la solicitud falla
          }
        })
        .catch(error => {
          console.error('Error en la solicitud POST:', error);
          // Manejo de errores en la solicitud fetch
        });
    },
    hoverTeam(team) {
      this.hoveredTeam = team;
    },
    getTeamImage(team) {
      // Método para obtener la imagen del equipo desde los assets
      return require(`@/assets/${team}.jpg`); // Asegúrate de tener las imágenes de los equipos en la carpeta de assets
    }
  }
};
</script>

<style scoped>
.choose-team-to-sign {
  background-color: #000000;
  color: #ffffff;
  padding: 20px;
  text-align: center;
}

.teams {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
}

.team-container {
  width: 120px;
  height: 120px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s;
  margin: 5px;
}

.team-container:hover {
  transform: scale(1.1);
}

.team-container.selected {
  border: 2px solid #4CAF50;
}

.team-logo {
  max-width: 80%;
  max-height: 80%;
}

.team-name {
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 0.8em;
}
</style>
