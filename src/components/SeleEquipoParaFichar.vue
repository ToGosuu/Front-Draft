<template>
    <div class="container">
      <h1 class="title">Selecciona tu equipo</h1>
      <div class="teams-container">
        <div
          v-for="(team, index) in nbaTeams"
          :key="index"
          @click="selectTeam(team)"
          class="team-card"
        >
          <img :src="team.logo" :alt="team.name" class="team-logo" />
          <p class="team-name">{{ team.name }}</p>
        </div>
      </div>
      <div class="buttons">
        <button @click="confirmSelection">Confirmar Selección</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nbaTeams: [
          // Aquí se incluirían los equipos de la NBA con su logo y nombre
        ],
        selectedTeam: null
      };
    },
    methods: {
      selectTeam(team) {
        this.selectedTeam = team;
      },
      confirmSelection() {
        if (this.selectedTeam) {
          // Lógica para confirmar la selección del equipo
        } else {
          alert("Por favor selecciona un equipo antes de continuar.");
        }
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
  
  .teams-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .team-card {
    width: 200px;
    margin-bottom: 20px;
    cursor: pointer;
  }
  
  .team-logo {
    width: 100%;
    height: auto;
  }
  
  .team-name {
    margin-top: 10px;
  }
  
  .buttons {
    margin-top: 20px;
  }
  
  button {
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
  