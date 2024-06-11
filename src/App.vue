<template>
  <div id="app">
    <StartPage v-if="currentPage === 'start'" @start-game="goToChooseUTeam" />
    <ChooseUTeam v-if="currentPage === 'chooseUTeam'" @team-chosen="teamChosen" />
    <ChooseTeam v-if="currentPage === 'chooseTeam'" @choose-team="goToLotteryProbabilities" />
    <LotteryProbabilities v-if="currentPage === 'lotteryProbabilities'" @simulate-lottery="goToDraftLottery" />
    <DraftLottery v-if="currentPage === 'draftLottery'" @go-to-draft="goToAssociationDraft" />
    <MyTeam v-if="currentPage === 'myTeam'" />
    <AssociationDraft v-if="currentPage === 'associationDraft'" />
    <PlayerTrades v-if="currentPage === 'playerTrades'" />
    <SelectTeam v-if="currentPage === 'selectTeam'" @select-team="goToPlayerTeam" />
    <PlayerTeam v-if="currentPage === 'playerTeam'" />
  </div>
</template>

<script>
import StartPage from './components/StartPage.vue';
import ChooseUTeam from './components/ChooseUTeam.vue';
import ChooseTeam from './components/ChooseTeam.vue';
import LotteryProbabilities from './components/LotteryProbabilities.vue';
import DraftLottery from './components/DraftLottery.vue';
import MyTeam from './components/MyTeam.vue';
import AssociationDraft from './components/AssociationDraft.vue';
import PlayerTrades from './components/PlayerTrades.vue';
import SelectTeam from './components/SelectTeam.vue';
import PlayerTeam from './components/PlayerTeam.vue';

export default {
  name: 'App',
  data() {
    return {
      currentPage: 'start',
    };
  },
  methods: {
    goToChooseUTeam() {
      this.currentPage = 'chooseUTeam';
    },
    teamChosen() {
      this.currentPage = 'chooseTeam';
    },
    goToLotteryProbabilities() {
      this.currentPage = 'lotteryProbabilities';
    },
    goToDraftLottery() {
      this.currentPage = 'draftLottery';
    },
    goToAssociationDraft() {
      this.currentPage = 'associationDraft';
    },
    goToPlayerTrades() {
      this.currentPage = 'playerTrades';
    },
    goToPlayerTeam() {
      this.currentPage = 'playerTeam';
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
