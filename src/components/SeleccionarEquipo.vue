<template>
  <div class="container">
    <h1 class="title">Elige tu equipo</h1>
    <div class="grid">
      <div
        class="team-container"
        v-for="(team, index) in teams"
        :key="index"
        @click="seleccionarEquipo(team)"
        @mouseenter="hoverEquipo(team)"
        @mouseleave="hoverEquipo(null)"
        :class="{ selected: equipoSeleccionado === team }"
        :aria-label="'Seleccionar equipo ' + team"
        role="button"
      >
        <img
          :src="getTeamImage(team)"
          :alt="'Escudo del equipo ' + team"
          class="team-logo"
        />
        <span v-if="equipoHover === team" class="team-name">{{ team }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SeleccionarEquipo',
  data() {
    return {
      teams: [
        "76ers", "Blazers", "Bucks", "Bulls", "Cavaliers", "Celtics", "Clippers", "Golden", "Grizzlies", "Hawks", "Heat", "Hornets", "Jazz", "Knicks", "Lakers", "Magic", "Mavericks", "Nets", "Nuggets", "Pacers", "Pelicans", "Pistons", "Raptors", "Rockets", "SacraKings", "Spurs", "Suns", "Thunder", "Timberwolves", "Wizards"
      ],
      equipoSeleccionado: null,
      equipoHover: null
    };
  },
  methods: {
    seleccionarEquipo(equipo) {
      this.equipoSeleccionado = equipo;
      console.log(`Equipo seleccionado: ${equipo}`);
      this.$router.push({ name: 'LotteryProbabilities' });
      // Aquí puedes agregar la lógica para manejar la selección del equipo
    },
    hoverEquipo(equipo) {
      this.equipoHover = equipo;
    },
    getTeamImage(team) {
      return require(`@/assets/${team}.jpg`);
    }
    
  }
};
</script>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
  background-color: #000000;
}

.container {
  padding: 20px;
  text-align: center;
  max-width: 100%;
  overflow-x: hidden;
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  color: white;
  font-size: 2em;
  margin-top: 20px;
  margin-bottom: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
  justify-items: center;
}

.team-container {
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s;
}

.team-container:hover {
  transform: scale(1.1);
}

.team-container.selected {
  border: 2px solid #4CAF50;
}

.team-logo {
  width: 70%;
  height: auto;
}

.team-name {
  position: absolute;
  bottom: 10px;
  color: black;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 0.8em;
}
</style>
