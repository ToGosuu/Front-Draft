<template>
  <div>
    <h2>Selecciona un equipo:</h2>
    <ul>
      <li
        v-for="equipo in teams"
        :key="equipo.id"
        @click="seleccionarEquipo(equipo.id)"
        @mouseover="hoverEquipo(equipo)"
        @mouseleave="hoverEquipo(null)"
      >
        <img :src="getTeamImage(equipo.name)" :alt="equipo.name" />
        <span>{{ equipo.name }}</span>
      </li>
    </ul>

    <h3 v-if="equipoSeleccionado">Equipo seleccionado: {{ equipoSeleccionado.name }}</h3>
    <h3 v-if="equipoHover">Equipo en hover: {{ equipoHover.name }}</h3>
    <p>{{ mensaje }}</p>
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SeleccionarEquipo',
  data() {
    return {
      teams: [],
      equipoSeleccionado: null,
      equipoHover: null,
      mensaje: '',
      errorMessage: ''
    };
  },
  mounted() {
    this.fetchTeams();
  },
  methods: {
    async fetchTeams() {
      try {
        const response = await axios.get('http://localhost:3001/api/1.0/nameTeam');
        this.teams = response.data.teams;
        this.mensaje = response.data.message;
      } catch (error) {
        console.error('Error al obtener datos desde Express:', error);
        this.errorMessage = 'Error al obtener datos desde el servidor';
      }
    },
    async seleccionarEquipo(equipoId) {
  const userId = localStorage.getItem('userId');
  const equipoSeleccionado = this.teams.find(equipo => equipo.id === equipoId);
  
  if (!userId) {
    this.errorMessage = 'Error: No se encontró userId en localStorage';
    return;
  }

  if (!equipoSeleccionado) {
    this.errorMessage = 'Error: No se encontró el equipo seleccionado';
    return;
  }

  try {
    const response = await axios.post('http://localhost:3001/api/1.0/gameUser', {
      idUser: "666cc9813a21fcaf7a3b5466",
      name: equipoSeleccionado.name,
      team: equipoSeleccionado.name
      
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 201) {
      console.log('Respuesta de inicio de juego:', response.data);
      this.$router.push({ name: 'LotteryProbabilities' });
    } else {
      console.error('Error al iniciar el juego:', response.data.message);
      this.errorMessage = `Error al iniciar el juego: ${response.data.message}`;
    }
  } catch (error) {
    console.error('Error en la solicitud:', error.message);
    this.errorMessage = `Error al iniciar el juego: ${error.message}`;
  }
}

,
    hoverEquipo(equipo) {
      this.equipoHover = equipo;
    },
    getTeamImage(teamName) {
      try {
        return require(`@/assets/${teamName}.jpg`);
      } catch (error) {
        return require('@/assets/Draft.jpg');
      }
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

.error-message {
  color: red;
  margin-top: 20px;
}
</style>
