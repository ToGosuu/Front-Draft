<template>
  <div class="container">
    <img :src="imageSrc" alt="NBA Draft 2017" />
    <div class="button-container">
      <button @click="iniciarPartida">Iniciar</button>
      <button @click="continuarPartida">Continuar</button>
    </div>
    
    <!-- Modal para iniciar partida -->
    <ModalInput v-if="showStartModal" :title="'Iniciar nueva partida'" @confirm="crearPartida"/>

    <!-- Modal para continuar partida -->
    <ModalInput v-if="showContinueModal" :title="'Continuar partida'" @confirm="cargarPartida"/>
  </div>
</template>

<script>
import ModalInput from '@/components/ModalInput.vue';
import SeleccionarEquipo from '@/components/SeleccionarEquipo.vue';

export default {
  data() {
    return {
      imageSrc: require('@/assets/draft.jpg'),
      showStartModal: false,
      showContinueModal: false
    };
  },
  components: {
    ModalInput
  },
  methods: {
    iniciarPartida() {
      this.showStartModal = true;
    },
    continuarPartida() {
      this.showContinueModal = true;
    },
    crearPartida(nombrePartida) {
      // Aquí enviarías el nombre de la partida al backend para crear una nueva partida
      console.log('Iniciando partida:', nombrePartida);
      this.showStartModal = false; // Ocultar modal después de confirmar
      this.$emit('update:component', SeleccionarEquipo);
    },
    cargarPartida(nombrePartida) {
      // Aquí enviarías el nombre de la partida al backend para cargar la partida seleccionada
      console.log('Cargando partida:', nombrePartida);
      this.showContinueModal = false; // Ocultar modal después de confirmar
    }
  }
};
</script>



<style scoped>
.container {
  position: relative;
  display: inline-block; /* Para que el contenedor se ajuste al tamaño de la imagen */
}

img {
  max-width: 100%;
  height: auto;
}

.button-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  margin: 0.5rem 0;
  padding: 1rem 2rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
