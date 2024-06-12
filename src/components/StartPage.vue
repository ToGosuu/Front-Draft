<template>
  <div class="start-page">
    <img src="@/assets/draft17.jpg" alt="Draft Image" class="background-image">
    <div class="buttons">
      <button @click="showModal" class="btn btn-primary">Iniciar</button>
      <button class="btn btn-secondary">Continuar</button>
    </div>
    <modal-input v-if="isModalVisible" @confirm="startGame" @close="hideModal" />
  </div>
</template>

<script>
import ModalInput from './ModalInput.vue';

export default {
  name: 'StartPage',
  components: {
    ModalInput
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
    },
    async startGame(name) {
      this.isModalVisible = false;
      try {
        const response = await fetch('/api/start-game', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ gameName: name })
        });
        const data = await response.json();
        if (response.ok) {
          // Emitir evento con el nombre ingresado y otros datos relevantes
          this.$emit('start-game', data);
        } else {
          console.error('Error al iniciar el juego:', data.message);
        }
      } catch (error) {
        console.error('Error al iniciar el juego:', error);
      }
    }
  }
};
</script>

<style scoped>
.start-page {
  position: relative;
  text-align: center;
  color: white;
}

.background-image {
  width: 100%;
  height: auto;
}

.buttons {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.btn {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 18px;
}

.btn-primary {
  background-color: red;
  border: none;
  color: white;
}

.btn-secondary {
  background-color: gray;
  border: none;
  color: white;
}
</style>
