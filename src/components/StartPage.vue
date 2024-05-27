<template>
  <div class="start-page">
    <img src="@/assets/draft17.jpg" alt="Draft Image" class="background-image">
    <div class="buttons">
      <button @click="startGame" class="btn btn-primary">Iniciar</button>
      <button class="btn btn-secondary">Continuar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartPage',
  methods: {
    startGame() {
      this.$emit('start-game');
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
