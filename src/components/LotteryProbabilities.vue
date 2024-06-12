<template>
  <div class="lottery-simulator">
    <h2>Simulador de lotería del DRAFT</h2>
    <div class="lottery-probabilities">
      <h3>Probabilidades de lotería</h3>
      <transition-group name="fade">
        <div v-for="(prob, index) in probabilities" :key="index" class="probability">
          <label>{{ prob.team }}: {{ prob.chance }}%</label>
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
    <button @click="simulateLottery" :disabled="draftOrder.length === 0 || simulating">
      {{ simulating ? 'Simulando...' : 'Simular lotería' }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      probabilities: [],
      draftOrder: [],
      simulating: false
    };
  },
  created() {
    this.fetchProbabilities();
    this.fetchDraftOrder();
  },
  methods: {
    fetchProbabilities() {
      fetch('/api/lottery-probabilities')
        .then(response => response.json())
        .then(data => {
          this.probabilities = data;
        })
        .catch(error => {
          console.error('Error al obtener las probabilidades de lotería:', error);
        });
    },
    fetchDraftOrder() {
      fetch('/api/draft-order')
        .then(response => response.json())
        .then(data => {
          this.draftOrder = data;
        })
        .catch(error => {
          console.error('Error al obtener el orden del draft:', error);
        });
    },
    simulateLottery() {
      if (this.draftOrder.length > 0 && !this.simulating) {
        this.simulating = true;
        // Simular la lotería (puedes agregar la lógica aquí)
        setTimeout(() => {
          // Finalizar la simulación (simulación de 1 segundo)
          this.simulating = false;
        }, 1000);
      }
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
