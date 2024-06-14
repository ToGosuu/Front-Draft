<template>

  <div id="app">
    <start-page></start-page>
    <component :is="currentPage"
               @teamChosen="goToChooseTeamToSing"
               @goToLotteryProbabilities="goToLotteryProbabilities"
               @goToDraftLottery="goToDraftLottery"
               @goToAssociationDraft="goToAssociationDraft"
               @goToPlayerTrades="goToTraspasos"
               @goToSeleccionarEquipo="goToSeleccionarEquipo"
               @goToMyTeam312="goToMyTeam312"
               @goToPlantillaEquipoParaFichar="goToPlantillaEquipoParaFichar"
               @goToModalInput="goToModalInput"
    ></component>
  </div>
</template>

<script>
import StartPage from './components/StartPage.vue';
import ChooseTeamToSing from './components/ChooseTeamToSing.vue';
import LotteryProbabilities from './components/LotteryProbabilities.vue';
import DraftLottery from './components/DraftLottery.vue';
import AssociationDraft from './components/AssociationDraft.vue';
import MyTeam from './components/MyTeam.vue';
import MyTeam312 from './components/MyTeam312.vue';
import PlantillaEquipoParaFichar from './components/PlantillaEquipoParaFichar.vue';
import SeleccionarEquipo from './components/SeleccionarEquipo.vue';
import TraspasosComponent from './components/TraspasosComponent.vue';
import ModalInput from './components/ModalInput.vue';
<<<<<<< HEAD

=======
>>>>>>> d26f8cd39e9486c0924a979be523f77e1527240e

export default {
  name: 'App',
  data() {
    return {
      currentPage: 'start',
    };
  },
  components: {
    StartPage,
    ChooseTeamToSing,
    LotteryProbabilities,
    DraftLottery,
    AssociationDraft,
    MyTeam,
    MyTeam312,
    PlantillaEquipoParaFichar,
    SeleccionarEquipo,
    TraspasosComponent,
    ModalInput
  },
  methods: {
    goToChooseTeamToSing() {
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
    goToTraspasos() {
      this.currentPage = 'traspasos';
    },
    goToSeleccionarEquipo() {
      this.currentPage = 'seleccionarEquipo';
    },
    goToMyTeam312() {
      this.currentPage = 'myTeam312';
    },
    goToPlantillaEquipoParaFichar() {
      this.currentPage = 'plantillaEquipoParaFichar';
    },
    goToModalInput() {
      this.currentPage = 'modalInput';
    }
  }
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
