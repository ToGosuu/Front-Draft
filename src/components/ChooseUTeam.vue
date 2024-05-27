<template>
    <div class="choose-u-team">
      <h2>Elige tu equipo</h2>
      <div class="teams">
        <div v-for="(team, index) in teams" :key="index" class="team" @click="chooseTeam(index)">
          <img :src="team.logo" :alt="team.name" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChooseUTeam',
    data() {
      return {
        teams: [
          // Lista de equipos con sus logos
          { name: 'Team 1', logo: 'path_to_logo_1' },
          { name: 'Team 2', logo: 'path_to_logo_2' },
          // ...
        ]
      };
    },
    methods: {
      chooseTeam(index) {
        this.$emit('team-chosen', index);
      }
    }
  };
  </script>
  
  <style scoped>
  .teams {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .team {
    margin: 10px;
    cursor: pointer;
  }
  .team img {
    width: 50px;
    height: 50px;
  }
  </style>
  