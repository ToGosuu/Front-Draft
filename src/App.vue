<template>
  <div id="app">
    <component :is="componenteActual" @update:component="actualizarComponente" />
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue';

export default {
  name: 'App',
  components: {
    MainPage
  },
  data() {
    return {
      componenteActual: MainPage // Componente inicial
    };
  },
  methods: {
    actualizarComponente(componente) {
      this.componenteActual = componente;
    }
  }
};
</script>

<style>
/* Estilos globales si es necesario */
</style>
