<template>
  <div>
    <h2>Selecciona un equipo:</h2>
    <ul>
      <li
        v-for="equipo in teams"
        :key="equipo"
        @click="seleccionarEquipo(equipo)"
        @mouseover="hoverEquipo(equipo)"
        @mouseleave="hoverEquipo(null)"
      >
        <img :src="getTeamImage(equipo)" :alt="equipo" />
        <span>{{ equipo }}</span>
      </li>
    </ul>

    <h3 v-if="equipoSeleccionado">Equipo seleccionado: {{ equipoSeleccionado }}</h3>
    <h3 v-if="equipoHover">Equipo en hover: {{ equipoHover }}</h3>
    <p>{{ mensaje }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SeleccionarEquipo',
  data() {
    return {
      teams: [
        "76ers", "Blazers", "Bucks", "Bulls", "Cavaliers", "Celtics", "Clippers", "Golden", "Grizzlies", "Hawks", "Heat", "Hornets", "Jazz", "Knicks", "Lakers", "Magic", "Mavericks", "Nets", "Nuggets", "Pacers", "Pelicans", "Pistons", "Raptors", "Rockets", "SacraKings", "Spurs", "Suns", "Thunder", "Timberwolves", "Wizards"
      ],
      equipoSeleccionado: null,
      equipoHover: null,
      mensaje: ''
    };
  },
  mounted() {
    axios.get('http://localhost:3001/app/routes/teams.mjs')
      .then(response => {
        this.mensaje = response.data.mensaje;
      })
      .catch(error => {
        console.error('Error al obtener datos desde Express:', error);
      });
  },
  methods: {
    seleccionarEquipo(equipo) {
      this.equipoSeleccionado = equipo;
      console.log(`Equipo seleccionado: ${equipo}`);
      this.$router.push({ name: 'LotteryProbabilities' }); // Comentado para pruebas locales
    },
    hoverEquipo(equipo) {
      this.equipoHover = equipo;
    },
    getTeamImage(team) {
      // Simplemente retorna una imagen por defecto para cada equipo por ahora
      return require(`@/assets/${team}.jpg`); // Ajusta la ruta según tu estructura de archivos
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 10px;
  cursor: pointer;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
