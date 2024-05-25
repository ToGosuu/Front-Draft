<template>
    <div class="container">
      <h1 class="title">Probabilidad de Lotería</h1>
      <table class="team-table">
        <thead>
          <tr>
            <th>Equipo</th>
            <th>Probabilidad (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(team, index) in lotteryTeams" :key="index">
            <td>
              <img :src="getTeamLogo(team.name)" :alt="team.name" class="team-logo" />
              <span>{{ team.name }}</span>
            </td>
            <td>{{ team.probability }}%</td>
          </tr>
        </tbody>
      </table>
      <button @click="simularLoteria" class="simulate-button">Simular Lotería</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        lotteryTeams: [
          { name: "Houston Rockets", probability: 25 },
          { name: "Detroit Pistons", probability: 19.9 },
          { name: "Orlando Magic", probability: 15.6 },
          { name: "Oklahoma City Thunder", probability: 11.9 },
          { name: "Cleveland Cavaliers", probability: 8.8 },
          { name: "Minnesota Timberwolves", probability: 5.3 },
          { name: "Toronto Raptors", probability: 5.3 },
          { name: "Chicago Bulls", probability: 2.8 },
          { name: "Sacramento Kings", probability: 1.7 },
          { name: "New Orleans Pelicans", probability: 1.1 },
          { name: "Charlotte Hornets", probability: 0.8 },
          { name: "San Antonio Spurs", probability: 0.7 },
          { name: "Indiana Pacers", probability: 0.6 },
          { name: "Golden State Warriors", probability: 0.5 }
        ]
      };
    },
    methods: {
      simularLoteria() {
        // Lógica para simular la lotería aquí
        console.log("Simulando la lotería...");
      },
      getTeamLogo(teamName) {
        // Lógica para obtener el enlace del logo del equipo
        // Por ahora, simplemente devolveremos un enlace de ejemplo
        return `https://www.example.com/logos/${teamName.replace(/\s+/g, '-').toLowerCase()}.png`;
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    text-align: center;
    padding: 20px;
  }
  
  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .team-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  
  .team-table th,
  .team-table td {
    padding: 10px;
    border: 1px solid #ccc;
  }
  
  .team-logo {
    width: 30px;
    height: auto;
    vertical-align: middle;
    margin-right: 5px;
  }
  
  .simulate-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .simulate-button:hover {
    background-color: #0056b3;
  }
  </style>
  