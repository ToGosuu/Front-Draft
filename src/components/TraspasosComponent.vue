<template>
  <div class="traspasos">
    <h2>Traspasos</h2>
    
    <!-- Opciones para seleccionar jugadores -->
    <div class="trade-options">
      <div>
        <label>Seleccionar del DRAFT</label>
        <button @click="selectDraftPlayer">+</button>
      </div>
      <div>
        <label>Seleccionar jugador de otro equipo</label>
        <button @click="selectOtherTeamPlayer">+</button>
      </div>
    </div>
    
    <!-- Jugadores seleccionados para el tradeo -->
    <div class="trade-players">
      <div class="trade-player" v-for="(player, index) in myTeamPlayers" :key="index">
        {{ player.name }}
        <!-- Otros detalles del jugador -->
        <button @click="removeFromTrade(player)">-</button>
      </div>
    </div>
    <div class="trade-players">
      <div class="trade-player" v-for="(player, index) in otherTeamPlayers" :key="index">
        {{ player.name }}
        <!-- Otros detalles del jugador -->
        <button @click="removeFromTrade(player)">-</button>
      </div>
    </div>
    
    <!-- Botón para realizar el tradeo -->
    <button @click="makeTrade">Fichar</button>
    
    <!-- Mensajes de éxito o error -->
    <p v-if="tradeSuccessMessage">{{ tradeSuccessMessage }}</p>
    <p v-if="tradeErrorMessage">{{ tradeErrorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'TraspasosComponent',
  props: {
    myTeamPlayers: Array, // Jugadores disponibles en el equipo del usuario
    otherTeamPlayers: Array // Jugadores disponibles en el otro equipo
  },
  data() {
    return {
      tradeSuccessMessage: '',
      tradeErrorMessage: ''
    };
  },
  methods: {
    selectDraftPlayer() {
      // Lógica para seleccionar un jugador del DRAFT
    },
    selectOtherTeamPlayer() {
      // Lógica para seleccionar un jugador del otro equipo
    },
    removeFromTrade(player) {
      // Lógica para quitar un jugador del tradeo
    },
    makeTrade() {
      // Lógica para realizar el tradeo
      // Aquí debes enviar la decisión del usuario al backend
      // y manejar la respuesta del backend
      this.sendTradeDecisionToBackend();
    },
    sendTradeDecisionToBackend() {
      // Simulando una solicitud al backend
      setTimeout(() => {
        // Aquí recibirías la respuesta del backend
        const tradeSuccess = true; // Supongamos que el intercambio fue exitoso
        if (tradeSuccess) {
          this.tradeSuccessMessage = '¡Intercambio exitoso!';
          // Redireccionar a la vista MyTeam312
          this.$router.push({ name: 'MyTeam312' });
        } else {
          this.tradeErrorMessage = '¡El intercambio falló! Por favor, inténtalo de nuevo.';
          // Redireccionar a la vista ChooseTeamToSing
          this.$router.push({ name: 'ChooseTeamToSing' });
        }
      }, 1000); // Simulación de una pequeña demora
    }
  }
};
</script>

<style scoped>
.traspasos {
  background-color: #333;
  color: #fff;
  padding: 20px;
}
.trade-options {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
.trade-players {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.trade-player {
  background-color: #777;
  color: white;
  padding: 10px;
  margin: 5px;
}
button {
  background-color: red;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>
