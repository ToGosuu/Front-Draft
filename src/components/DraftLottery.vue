<!-- src/components/DraftLottery.vue -->
<template>
    <div class="draft-lottery">
      <h2>Lotería del DRAFT</h2>
      <ul>
        <li v-for="(team, index) in draftOrder" :key="index">{{ index + 1 }}. {{ team }}</li>
      </ul>
      <button @click="goToDraft">Pasar al DRAFT</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        draftOrder: []
      };
    },
    created() {
      // Fetch draft order from the backend
      fetch('/api/draft-order')
        .then(response => response.json())
        .then(data => {
          this.draftOrder = data;
        });
    },
    methods: {
      goToDraft() {
        this.$emit('go-to-draft');
      }
    }
  };
  </script>
  
  <style scoped>
  .draft-lottery {
    background-color: #333;
    color: #fff;
    padding: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 5px;
  }
  button {
    background-color: red;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  </style>
  