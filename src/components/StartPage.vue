<template>
  <div class="start-page">
    <img src="@/assets/draft17.jpg" alt="Draft Image" class="background-image">
    <div class="buttons">
      <button @click="showModal('start')" class="btn btn-primary">Iniciar</button>
      <button class="btn btn-secondary" @click="showModal('continue')">Continuar</button>
    </div>
    <modal-input 
      v-if="isModalVisible" 
      :title="modalTitle" 
      @confirm="handleConfirm" 
      @close="hideModal" 
    />
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script>
import ModalInput from './ModalInput.vue';
import axios from 'axios'; // Importa Axios para realizar solicitudes HTTP

export default {
  name: 'StartPage',
  components: {
    ModalInput
  },
  data() {
    return {
      isModalVisible: false,
      errorMessage: '',
      modalType: '' // 'start' o 'continue'
    };
  },
  computed: {
    modalTitle() {
      return this.modalType === 'start' ? 'Ingrese el nombre de la nueva partida' : 'Ingrese el nombre de la partida a continuar';
    }
  },
  methods: {
    showModal(type) {
      this.modalType = type;
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
    },
    async handleConfirm(name) {
      this.isModalVisible = false;
      this.errorMessage = '';
      if (this.modalType === 'start') {
        await this.startGame(name);
      } else if (this.modalType === 'continue') {
        await this.continueGame(name);
      }
    },
    async startGame(name) {
      try {
        // Realiza una solicitud POST al endpoint /users en el servidor Express
        const response = await axios.post('/api/gameUsers', { name }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (response.status === 200) {
          // Aquí maneja la respuesta según sea necesario
          console.log('Respuesta de inicio de juego:', response.data);
          // Redirigir a la página de selección de equipo
          this.$router.push({ name: 'SeleccionarEquipo' });
        } else {
          this.errorMessage = `Error al iniciar el juego: ${response.data.message}`;
        }
      } catch (error) {
        this.errorMessage = `Error al iniciar el juego: ${error.message}`;
      }
    },
    async continueGame(name) {
      try {
        // Realiza una solicitud GET al endpoint /users/:id en el servidor Express
        const response = await axios.get(`/api/gameUsers/${encodeURIComponent(name)}`);
        if (response.status === 200) {
          // Aquí maneja la respuesta según sea necesario
          console.log('Respuesta de continuación de juego:', response.data);
          // Redirigir a la página de continuación del juego
          this.$router.push({ name: 'ContinuarJuego', params: { gameName: name } });
        } else {
          this.errorMessage = `Error al verificar el juego: ${response.data.message}`;
        }
      } catch (error) {
        this.errorMessage = `Error al verificar el juego: ${error.message}`;
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
  cursor: pointer;
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

.error-message {
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 0, 0, 0.8);
  padding: 10px;
  border-radius: 5px;
  color: white;
}
</style>
