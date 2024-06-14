<template>
  <div class="start-page">
    <img src="@/assets/Draft.jpg" alt="Draft Image" class="background-image">
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
import axios from 'axios';

export default {
  name: 'StartPage',
  components: {
    ModalInput
  },
  data() {
    return {
      isModalVisible: false,
      errorMessage: '',
      modalType: ''
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
        await this.startGame(name); // Llama a startGame con el nombre ingresado
      }
    },
    async startGame(name) {
      try {
        const response = await axios.post('http://localhost:3001/api/1.0/user', { name }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.status === 201) {
          console.log('Respuesta de inicio de juego:', response.data);
          // Guardar el id del usuario en localStorage para usarlo más adelante
          localStorage.setItem('userId', response.data.id);

          // Redirige a la página de selección de equipo después de confirmar el nombre
          this.$router.push({ name: 'SeleccionarEquipo' });
        } else {
          console.error('Error al iniciar el juego:', response.data.message);
          this.errorMessage = `Error al iniciar el juego: ${response.data.message}`;
        }
      } catch (error) {
        console.error('Error en la solicitud:', error.message);
        this.errorMessage = `Error al iniciar el juego: ${error.message}`;
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
