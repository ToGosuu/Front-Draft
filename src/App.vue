<template>
  <div id="app">
    <start-page></start-page>
    <router-view></router-view>
  </div>
</template>

<script>
import StartPage from './components/StartPage.vue';

export default {
  name: 'App',
  components: {
    StartPage,
  },
  data() {
    return {
      currentPage: 'start',
    };
  },
  methods: {
    // Aquí puedes definir tus métodos para cambiar la página actual
    // En este ejemplo, no es necesario definir métodos para cada componente
    // porque el enrutador manejará la navegación por ti.
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

.content {
  width: 80%;
  margin: 20px auto;
}
</style>
