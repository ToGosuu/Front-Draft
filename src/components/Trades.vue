<!-- src/components/Trades.vue -->
<template>
    <div class="trades">
      <h2>Traspasos</h2>
      <div class="trade-options">
        <div>
          <label>Selecciona del DRAFT</label>
          <button @click="selectDraftPlayer">+</button>
        </div>
        <div>
          <label>Selecciona jugador de otro equipo</label>
          <button @click="selectOtherTeamPlayer">+</button>
        </div>
      </div>
      <button @click="makeTrade">Fichar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        draftPlayer: null,
        otherTeamPlayer: null
      };
    },
    methods: {
      selectDraftPlayer() {
        // Lógica para seleccionar un jugador del draft
      },
      selectOtherTeamPlayer() {
        // Lógica para seleccionar un jugador de otro equipo
      },
      makeTrade() {
        // Enviar la decisión del usuario al backend
        fetch('/api/make-trade', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            draftPlayer: this.draftPlayer,
            otherTeamPlayer: this.otherTeamPlayer
          })
        })
        .then(response => response.json())
        .then(data => {
          // Handle response data
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .trades {
    background-color: #333;
    color: #fff;
    padding: 20px;
  }
  .trade-options {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  button {
    background-color: red;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  </style>
  