<template>
  <div class="draft-lottery">
    <h2>Lotería del DRAFT</h2>
    <transition-group name="fade">
      <ul>
        <li v-for="(team, index) in draftOrder" :key="index">
          {{ index + 1 }}. {{ team.name }} - Posición: {{ team.position }}
        </li>
      </ul>
    </transition-group>
    <button @click="goToAssociationDraft">Ir a Association Draft</button>
    <button @click="goToMyTeam">Ir a Mi Equipo</button>
    <button @click="goToTraspasosComponent">Ir a Traspasos</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      draftOrder: []
    };
  },
  created() {
    this.fetchDraftOrder();
  },
  methods: {
    fetchDraftOrder() {
      axios.get('http://localhost:3001/api/1.0/simulateLottery')
        .then(response => {
          this.draftOrder = response.data.draftOrder;
        })
        .catch(error => {
          console.error('Error al obtener el orden del draft:', error);
        });
    },
    goToAssociationDraft() {
      // No es necesario verificar la longitud de draftOrder aquí
      this.$router.push({ name: 'AssociationDraft' });
    },
    goToMyTeam() {
      // No es necesario verificar la longitud de draftOrder aquí
      this.$router.push({ name: 'MyTeam' });
    },
    goToTraspasosComponent() {
      // No es necesario verificar la longitud de draftOrder aquí
      this.$router.push({ name: 'TraspasosComponent' });
    }
  }
};
</script>

<style scoped>
.draft-lottery {
  background-color: #333;
  color: #fff;
  padding: 20px;
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
  margin-right: 10px;
}
button:disabled {
  background-color: gray;
  cursor: not-allowed;
}
</style>
