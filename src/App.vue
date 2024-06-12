<template>
  <div id="app">
    <StartPage v-if="currentPage === 'start'" @start-game="goToChooseUTeam" />
    <ChooseUTeam v-if="currentPage === 'chooseUTeam'" @team-chosen="teamChosen" />
    <ChooseTeamToSing v-if="currentPage === 'chooseTeamToSing'" @choose-team="goToLotteryProbabilities" />
    <LotteryProbabilities v-if="currentPage === 'lotteryProbabilities'" @simulate-lottery="goToDraftLottery" />
    <DraftLottery v-if="currentPage === 'draftLottery'" @go-to-draft="goToAssociationDraft" />
    <MyTeam v-if="currentPage === 'myTeam'" />
    <MyTeam3-1-2 v-if="currentPage === 'myTeam3-1-2'" />
    <PlantillaEquipoParaFichar v-if="currentPage === 'plantillaEquipoParaFichar'" />
    <SeleccionarEquipo v-if="currentPage === 'seleccionarEquipo'" @select-team="goToPlayerTeam" />
    <Traspasos v-if="currentPage === 'traspasos'" />
    <AssociationDraft v-if="currentPage === 'associationDraft'" />
    <ModalInput v-if="currentPage === 'modalInput'" />
  </div>
</template>

<script>
import StartPage from './components/StartPage.vue';
import ChooseUTeam from './components/ChooseUTeam.vue';
import ChooseTeamToSing from './components/ChooseTeamToSing.vue';
import LotteryProbabilities from './components/LotteryProbabilities.vue';
import DraftLottery from './components/DraftLottery.vue';
import MyTeam from './components/MyTeam.vue';
import MyTeam3-1-2 from './components/MyTeam3-1-2.vue';
import PlantillaEquipoParaFichar from './components/PlantillaEquipoParaFichar.vue';
import SeleccionarEquipo from './components/SeleccionarEquipo.vue';
import Traspasos from './components/Traspasos.vue';
import AssociationDraft from './components/AssociationDraft.vue';
import ModalInput from './components/ModalInput.vue';

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
      this.currentPage = 'chooseTeamToSing';
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
      this.currentPage = 'traspasos';
    },
    goToPlayerTeam() {
      this.currentPage = 'playerTeam';
    },
    goToMyTeam3-1-2() {
      this.currentPage = 'myTeam3-1-2';
    },
    goToPlantillaEquipoParaFichar() {
      this.currentPage = 'plantillaEquipoParaFichar';
    },
    goToSeleccionarEquipo() {
      this.currentPage = 'seleccionarEquipo';
    },
    goToModalInput() {
      this.currentPage = 'modalInput';
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
