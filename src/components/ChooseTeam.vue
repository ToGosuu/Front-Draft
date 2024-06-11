<template>
  <div class="choose-team">
    <h2>Elige tu equipo</h2>
    <div class="teams">
      <button v-for="(team, index) in teams" :key="index" @click="chooseTeam(team)">
        {{ team }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['playerName'],
  data() {
    return {
      teams: ['Equipo 1', 'Equipo 2', 'Equipo 3', /* ... otros equipos */]
    };
  },
  methods: {
    chooseTeam(team) {
      this.$emit('choose-team', { playerName: this.playerName, team });
    }
  }
};
</script>

<style scoped>
.choose-team {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}
.teams {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
button {
  background-color: #777;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin: 5px;
}
</style>
