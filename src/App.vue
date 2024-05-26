<!-- src/App.vue -->
<template>
  <div id="app">
    <component :is="componenteActual" @update:component="actualizarComponente" />
    <StartGame v-if="currentStage === 'start'" @start-game="startGame"/>
    <ChooseTeam v-if="currentStage === 'choose-team'" :playerName="playerName" @choose-team="chooseTeam"/>
    <LotteryProbabilities v-if="currentStage === 'lottery-probabilities'"/>
    <DraftLottery v-if="currentStage === 'draft-lottery'" @go-to-draft="goToDraft"/>
    <MyTeam v-if="currentStage === 'my-team-3-3-1'"/>
    <AssociationDraft v-if="currentStage === 'association-draft'" @draft-player="draftPlayer"/>
    <MyTeam v-if="currentStage === 'my-team-3-2-2'"/>
    <Trades v-if="currentStage === 'trades'" @make-trade="makeTrade"/>
    <MyTeam v-if="currentStage === 'my-team-3-1-2'"/>
    <SelectTeam v-if="currentStage === 'select-team'" @select-team="selectTeam"/>
    <PlayerTeam v-if="currentStage === 'player-team'" @select-player="selectPlayer"/>
  </div>
</template>

<script>
import StartGame from './components/StartGame.vue';
import ChooseTeam from './components/ChooseTeam.vue';
import LotteryProbabilities from './components/LotteryProbabilities.vue';
import DraftLottery from './components/DraftLottery.vue';
import MyTeam from './components/MyTeam.vue';
import AssociationDraft from './components/AssociationDraft.vue';
import Trades from './components/Trades.vue';
import SelectTeam from './components/SelectTeam.vue';
import PlayerTeam from './components/PlayerTeam.vue';

export default {
  name: 'App',
  data() {
    return {
      currentStage: 'start',
      playerName: ''
    };
  },
  methods: {
    startGame(playerName) {
      this.playerName = playerName;
      this.currentStage = 'choose-team';
    },
    chooseTeam({ playerName, team }) {
      this.playerName = playerName;
      // Send player name and team to the backend
      fetch('/api/choose-team', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ playerName, team })
      })
      .then(response => response.json())
      .then(data => {
        this.currentStage = 'lottery-probabilities';
      });
    },
    goToDraft() {
      this.currentStage = 'my-team-3-3-1';
    },
    draftPlayer(player) {
      this.currentStage = 'my-team-3-2-2';
    },
    makeTrade(trade) {
      this.currentStage = 'my-team-3-1-2';
    },
    selectTeam(team) {
      this.currentStage = 'player-team';
    },
    selectPlayer(player) {
      // Handle player selection
    }
  }
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

