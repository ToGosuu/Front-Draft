<template>
  <div class="association-draft">
    <h2>DRAFT de la asociación</h2>
    <label for="position-input">Seleccionar jugador por posición:</label>
    <input type="number" id="position-input" v-model="selectedPosition" placeholder="Número de posición">
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
        <tr v-for="player in playersDraft" :key="player.id" @click="selectPlayer(player)">
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
  data() {
    return {
      selectedPlayer: null,
      selectedPosition: '',  // Dato para almacenar la posición seleccionada
      playersDraft: []  // Inicializar como un arreglo vacío para los jugadores de playersDraft
    };
  },
  created() {
    // Cargar los jugadores desde playersDraft al inicializar el componente
    this.loadPlayersDraft();
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
          idTeam: '665cff7fda591cb24e7fd18c' // ID del equipo al que se va a draftear el jugador
        });
        if (response.status === 200) {
          // Si la solicitud es exitosa, redirigir a la ventana MyTeam
          this.$router.push({ name: 'MyTeam' });
          // Volver a cargar los jugadores desde playersDraft después de draftear
          this.loadPlayersDraft();
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
    },
    async loadPlayersDraft() {
      try {
        // Hacer la solicitud GET para obtener los jugadores desde playersDraft
        const response = await axios.get('http://localhost:3001/api/1.0/playersDraft');
        if (response.status === 200) {
          this.playersDraft = response.data;  // Actualizar la lista de jugadores desde playersDraft
        } else {
          console.error('Error al obtener jugadores desde playersDraft');
        }
      } catch (error) {
        console.error('Error al obtener jugadores desde playersDraft:', error);
      }
    },
    selectByPosition() {
      // Método para seleccionar el jugador por posición
      const position = parseInt(this.selectedPosition);
      if (!isNaN(position) && position > 0 && position <= this.playersDraft.length) {
        this.selectedPlayer = this.playersDraft[position - 1]; // Arrays son base 0
      } else {
        console.error('Posición inválida');
      }
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
