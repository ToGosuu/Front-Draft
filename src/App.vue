<template>
  <div id="app">
    <component :is="componenteActual" @update:component="actualizarComponente" />
    <LotterySimulator />
    <DraftLottery />
    <Trades />
    <AssociationDraft />
    <MyTeam />
    <SelectTeam />
    <PlayerTeam />
  </div>
</template>

<script>
import LotterySimulator from './components/LotterySimulator.vue';
import DraftLottery from './components/DraftLottery.vue';
import Trades from './components/Trades.vue';
import AssociationDraft from './components/AssociationDraft.vue';
import MyTeam from './components/MyTeam.vue';
import SelectTeam from './components/SelectTeam.vue';
import PlayerTeam from './components/PlayerTeam.vue';

export default {
  name: 'App',
  components: {
    LotterySimulator,
    DraftLottery,
    Trades,
    AssociationDraft,
    MyTeam,
    SelectTeam,
    PlayerTeam
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