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
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in players" :key="player.id" @click="selectPlayer(player)">
          <td>{{ player.name }}</td>
          <td>{{ player.position }}</td>
          <td>{{ player.rating }}</td>
          <td>{{ player.age }}</td>
          <td>{{ player.team }}</td>
          <td><button @click="draftPlayer(player)">Draftear</button></td>
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
import axios from 'axios'; // Importar Axios para realizar solicitudes HTTP

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
      // Establecer el jugador seleccionado
      this.selectedPlayer = player;
    },
    async draftPlayer(player) {
      try {
        // Hacer la solicitud PUT para draftear al jugador con su ID
        const response = await axios.put(`http://localhost:3001/api/1.0/changeTeam/${player.id}`, {
          idTeam: 'ID_DEL_EQUIPO' // Reemplazar 'ID_DEL_EQUIPO' con el ID real del equipo
        });
        if (response.status === 200) {
          // Si la solicitud es exitosa, redirigir a la ventana MyTeam
          this.$router.push({ name: 'MyTeam' });
        } else {
          console.error('Error al draftear al jugador');
        }
      } catch (error) {
        console.error('Error al draftear al jugador:', error);
      }
    },
    confirmSelection() {
      // Aquí se podría implementar lógica adicional para confirmar la selección localmente si es necesario
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
