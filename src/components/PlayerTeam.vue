<template>
    <div class="player-team">
      <h2>Equipo del jugador que quiero fichar</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Posición</th>
            <th>Media</th>
            <th>Edad</th>
            <th>Contrato</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>James Harden</td>
            <td>G</td>
            <td>95</td>
            <td>28</td>
            <td>5 años/$40M</td>
          </tr>
        </tbody>
      </table>
      <button @click="selectPlayer">Seleccionar</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      selectPlayer() {
        // Lógica para seleccionar un jugador
      }
    }
  };
  </script>
  
  <style scoped>
  .player-team {
    background-color: #333;
    color: #fff;
    padding: 20px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 10px;
  }
  th, td {
    border: 1px solid #fff;
    padding: 10px;
    text-align: left;
  }
  button {
    background-color: red;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  </style>
  