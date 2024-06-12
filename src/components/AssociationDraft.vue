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
        <tr v-for="(player, index) in players" :key="index" @click="selectPlayer(player)">
          <td>{{ player.name }}</td>
          <td>{{ player.position }}</td>
          <td>{{ player.rating }}</td>
          <td>{{ player.age }}</td>
          <td>{{ player.team }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="selectedPlayer" class="selection-confirmation">
      <p>Has seleccionado a <strong>{{ selectedPlayer.name }}</strong>.</p>
      <button @click="confirmSelection">Confirmar selección</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AssociationDraft',
  props: {
    players: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedPlayer: null
    };
  },
  methods: {
    selectPlayer(player) {
      this.selectedPlayer = player;
    },
    confirmSelection() {
      // Aquí puedes implementar la lógica para confirmar la selección y enviarla al backend
      console.log('Selección confirmada:', this.selectedPlayer);
      // Resetear la selección después de la confirmación
      this.selectedPlayer = null;
    }
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
.selection-confirmation {
  margin-top: 20px;
}
.selection-confirmation p {
  margin-bottom: 10px;
}
.selection-confirmation button {
  background-color: red;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}
</style>
