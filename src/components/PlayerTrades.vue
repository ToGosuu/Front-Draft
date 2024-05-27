<!-- src/components/Trades.vue -->
<template>
    <div class="Player trades">
      <h2>Traspasos</h2>
      <div class="Player-trade-options">
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
    name: 'PlayerTrades',
    data() {
      return {
        // Define tu data aquí si la necesitas, o elimínala si no la usas
      };
    },
    methods: {
      // Tus métodos aquí
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
  