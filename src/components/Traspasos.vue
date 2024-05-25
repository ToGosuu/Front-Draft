<template>
    <div class="container">
      <h1 class="title">Traspasos</h1>
      <div class="tables-container">
        <div class="table">
          <h2>Jugadores Disponibles para Fichar</h2>
          <table class="players-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Posición</th>
                <th>Edad</th>
                <th>Altura</th>
                <th>Peso</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(player, index) in availablePlayers" :key="index">
                <td>{{ player.name }}</td>
                <td>{{ player.position }}</td>
                <td>{{ player.age }}</td>
                <td>{{ player.height }}</td>
                <td>{{ player.weight }}</td>
                <td><button @click="fichar(player)">Fichar</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table">
          <h2>Mis Jugadores para Vender</h2>
          <table class="players-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Posición</th>
                <th>Edad</th>
                <th>Altura</th>
                <th>Peso</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(player, index) in myPlayers" :key="index">
                <td>{{ player.name }}</td>
                <td>{{ player.position }}</td>
                <td>{{ player.age }}</td>
                <td>{{ player.height }}</td>
                <td>{{ player.weight }}</td>
                <td><button @click="vender(player)">Vender</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="buttons">
        <button @click="pasarAlDraft">Pasar al Draft</button>
        <button @click="verEquipo">Ver Equipo</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        availablePlayers: [
          // Aquí se incluirían los jugadores disponibles para fichar
        ],
        myPlayers: [
          // Aquí se incluirían los jugadores del equipo del usuario para vender
        ]
      };
    },
    methods: {
      fichar(player) {
        // Lógica para fichar al jugador seleccionado
      },
      vender(player) {
        // Lógica para vender al jugador seleccionado
      },
      pasarAlDraft() {
        // Lógica para pasar al draft
      },
      verEquipo() {
        // Lógica para ver el equipo
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
  }
  
  .title {
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  .tables-container {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
  
  .table {
    width: 45%;
  }
  
  .players-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  
  .players-table th,
  .players-table td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  .players-table th {
    background-color: #f2f2f2;
  }
  
  .buttons {
    display: flex;
    justify-content: center;
  }
  
  button {
    margin: 0 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  