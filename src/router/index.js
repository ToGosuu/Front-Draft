import Vue from 'vue';
import Router from 'vue-router';
import StartPage from '@/components/StartPage.vue';
import SeleccionarEquipo from '@/components/SeleccionarEquipo.vue';
import LotteryProbabilities from '@/components/LotteryProbabilities.vue';
import DraftLottery from '@/components/DraftLottery.vue';
import AssociationDraft from '@/components/AssociationDraft.vue';
import MyTeam from '@/components/MyTeam.vue';
import TraspasosComponent from '@/components/TraspasosComponent.vue';
import PlantillaEquipoParaFichar from '@/components/PlantillaEquipoParaFichar.vue';
import MyTeam312 from '@/components/MyTeam312.vue';
import ChooseTeamToSing from '@/components/ChooseTeamToSing.vue'; // Corregido el nombre del componente

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage
    },
    {
      path: '/seleccionar-equipo',
      name: 'SeleccionarEquipo',
      component: SeleccionarEquipo
    },
    {
      path: '/lottery-probabilities',
      name: 'LotteryProbabilities',
      component: LotteryProbabilities
    },
    {
      path: '/draft-lottery',
      name: 'DraftLottery',
      component: DraftLottery
    },
    {
      path: '/association-draft',
      name: 'AssociationDraft',
      component: AssociationDraft
    },
    {
      path: '/my-team',
      name: 'MyTeam',
      component: MyTeam
    },
    {
      path: '/traspasos-component',
      name: 'TraspasosComponent',
      component: TraspasosComponent
    },
    {
      path: '/plantilla-equipo/:team',
      name: 'PlantillaEquipoParaFichar',
      component: PlantillaEquipoParaFichar,
      props: true
    },
    {
      path: '/my-team-312',
      name: 'MyTeam312',
      component: MyTeam312
    },
    {
      path: '/choose-team-to-sing',
      name: 'ChooseTeamToSing',
      component: ChooseTeamToSing
    }
  ]
});
