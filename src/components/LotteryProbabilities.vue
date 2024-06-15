<template>
  <div class="lottery-simulator">
    <h2>Simulador de lotería del DRAFT</h2>
    <div class="lottery-probabilities">
      <h3>Probabilidades de lotería</h3>
      <transition-group name="fade">
        <div v-if="probabilities.length > 0">
          <div v-for="(prob, index) in probabilities" :key="index" class="probability">
            <label>{{ prob.team }}: {{ prob.chance }}%</label>
          </div>
        </div>
        <div v-else>
          <p>Cargando probabilidades...</p>
        </div>
      </transition-group>
    </div>
    <div class="draft-lottery">
      <h3>Lotería del DRAFT</h3>
      <transition-group name="fade">
        <ul>
          <li v-for="(team, index) in draftOrder" :key="index">{{ index + 1 }}. {{ team }}</li>
        </ul>
      </transition-group>
    </div>
    <button @click="goToDraftLottery">
      Ir a DraftLottery
    </button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      probabilities: [],
      draftOrder: [],
      simulating: false
    };
  },
  created() {
    this.fetchProbabilities(); // Llama a la función para obtener las probabilidades al crear el componente
  },
  methods: {
    fetchProbabilities() {
      axios.get('http://localhost:3001/api/1.0/probabilityLottery')
        .then(response => {
          this.probabilities = response.data.probabilities; // Asigna los datos obtenidos a probabilities
        })
        .catch(error => {
          console.error('Error al obtener las probabilidades de lotería:', error);
        });
    },
    goToDraftLottery() {
      // Navegar a la ruta DraftLottery
      this.$router.push({ name: 'DraftLottery' });
    }
  }
};
</script>

<style scoped>
.lottery-simulator {
  background-color: #333;
  color: #fff;
  padding: 20px;
}

.lottery-probabilities, .draft-lottery {
  margin-bottom: 20px;
}

.lottery-probabilities h3, .draft-lottery h3 {
  margin-bottom: 10px;
}

.probability {
  margin-bottom: 5px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
