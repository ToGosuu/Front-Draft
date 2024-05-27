<!-- src/components/AssociationDraft.vue -->
<template>
    <div class="association-draft">
      <h2>DRAFT de la asociación</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Posición</th>
            <th>Media</th>
            <th>Edad</th>
            <th>Equipo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in players" :key="index" @click="draftPlayer(player)">
            <td>{{ player.name }}</td>
            <td>{{ player.position }}</td>
            <td>{{ player.rating }}</td>
            <td>{{ player.age }}</td>
            <td>{{ player.team }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AssociationDraft',
    data() {
      return {
        // Define tu data aquí si la necesitas, o elimínala si no la usas
      };
    },
    methods: {
      // Tus métodos aquí
    }
  };
  </script>
  
  <style scoped>
  .association-draft {
    background-color: #333;
    color: #fff;
    padding: 20px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 10px;
  }
  th, td {
    border: 1px solid #fff;
    padding: 10px;
    text-align: left;
  }
  tbody tr {
    cursor: pointer;
  }
  tbody tr:hover {
    background-color: #444;
  }
  </style>
  