<template>
    <div class="trades">
      <h2>Traspasos</h2>
      <div class="trade-section">
        <div>
          <label>Selecciona del DRAFT</label>
          <button>+</button>
        </div>
        <div>
          <label>Jugador existente en el equipo</label>
          <button>+</button>
        </div>
      </div>
      <button @click="goToDraft">Pasar al DRAFT</button>
      <button @click="goToTeam">Equipo</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToDraft() {
        // Lógica para pasar al draft
      },
      goToTeam() {
        // Lógica para ver el equipo
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
  .trade-section {
    display: flex;
    justify-content: space-between;
  }
  button {
    background-color: red;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
  }
  </style>
  