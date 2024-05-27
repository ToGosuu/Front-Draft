<template>
  <div id="app">
    <StartPage v-if="currentPage === 'start'" @start-game="goToChooseUTeam" />
    <ChooseUTeam v-if="currentPage === 'chooseUTeam'" @team-chosen="teamChosen" />
    <ChooseTeam v-if="currentPage === 'chooseTeam'" />
    <LotteryProbabilities v-if="currentPage === 'lotteryProbabilities'" />
    <DraftLottery v-if="currentPage === 'draftLottery'" />
    <MyTeam v-if="currentPage === 'myTeam'" />
    <AssociationDraft v-if="currentPage === 'associationDraft'" />
    <PlayerTrades v-if="currentPage === 'playerTrades'" />
    <SelectTeam v-if="currentPage === 'selectTeam'" />
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
  components: {
    StartPage,
    ChooseUTeam,
    ChooseTeam,
    LotteryProbabilities,
    DraftLottery,
    MyTeam,
    AssociationDraft,
    PlayerTrades,
    SelectTeam,
    PlayerTeam
  },
  data() {
    return {
      currentPage: 'start' // La página inicial es 'start'
    };
  },
  methods: {
    goToChooseUTeam() {
      this.currentPage = 'chooseUTeam';
    },
    teamChosen(index) {
      console.log('Equipo elegido:', index);
      // Aquí se puede navegar a la siguiente página después de elegir el equipo
      this.currentPage = 'lotteryProbabilities';
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
