<template>
    <div class="container">
      <h1 class="title">Resultado de la Lotería del Draft</h1>
      <div class="grid">
        <!-- Aquí se mostrarán los equipos -->
        <div class="team" v-for="(team, index) in draftResult" :key="index">
          <img :src="team.logo" :alt="team.name" class="team-logo" />
          <div class="team-info">
            <p>{{ team.name }}</p>
            <p>Posición: {{ team.position }}</p>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button @click="goToDraft">Ir al Draft</button>
        <button @click="goToTrades">Traspasos</button>
        <button @click="goToTeam">Equipo</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        draftResult: []
      };
    },
    created() {
      this.generateDraftResult();
    },
    methods: {
      generateDraftResult() {
        // Aquí simulamos el resultado de la lotería del draft basado en las probabilidades
        const teams = [
          { name: "Equipo 1", logo: "@/assets/logo1.png", probability: 25 },
          { name: "Equipo 2", logo: "@/assets/logo2.png", probability: 19.9 },
          // Continúa con el resto de los equipos...
        ];
  
        // Ordenar los equipos por probabilidad (mayor a menor)
        teams.sort((a, b) => b.probability - a.probability);
  
        // Asignar posición basada en el orden
        this.draftResult = teams.map((team, index) => ({
          ...team,
          position: index + 1
        }));
      },
      goToDraft() {
        // Navegar a la página del Draft
      },
      goToTrades() {
        // Navegar a la página de Traspasos
      },
      goToTeam() {
        // Navegar a la página de Mi Equipo
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    background-color: #f0f0f0;
    padding: 20px;
  }
  
  .title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  
  .team {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .team-logo {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
  }
  
  .team-info {
    text-align: center;
  }
  
  .buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  button {
    margin: 0 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  