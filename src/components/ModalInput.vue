<template>
  <div class="modal">
    <div class="modal-content">
      <h2>{{ title }}</h2>
      <input type="text" v-model="inputValue" placeholder="Nombre de la partida" @keyup.enter="confirm">
      <button @click="confirm" :disabled="isSubmitting">{{ isSubmitting ? 'Enviando...' : 'Confirmar' }}</button>
      <button @click="close" :disabled="isSubmitting">Cerrar</button>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalInput',
  props: {
    title: {
      type: String,
      default: 'Ingrese el nombre de la partida'
    }
  },
  data() {
    return {
      inputValue: '',
      isSubmitting: false,
      errorMessage: ''
    };
  },
  methods: {
    async confirm() {
      if (!this.inputValue) {
        this.errorMessage = 'El nombre de la partida no puede estar vacío';
        return;
      }
      this.isSubmitting = true;
      this.errorMessage = '';
      try {
        await this.$emit('confirm', this.inputValue);
      } catch (error) {
        this.errorMessage = 'Error al enviar el nombre de la partida';
      } finally {
        this.isSubmitting = false;
      }
    },
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
}

input {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  margin: 0 5px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button + button {
  background-color: #f44336;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
