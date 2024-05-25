<template>
    <div class="container">
      <h1 class="title">Elige tu equipo</h1>
      <div class="grid">
        <div class="team-container" v-for="(team, index) in teams" :key="index" @click="seleccionarEquipo(team)">
          <img
            :src="require(`@/assets/${team}.jpg`)"
            :alt="'Escudo del equipo ' + team"
            class="team-logo"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        teams: [
          "76ers","Blazers","Bucks","Bulls","Cavaliers","Celtics","Clippers","Golden","Grizzlies","Hawks","Heat","Hornets","Jazz","Knicks","Lakers","Magic","Mavericks","Nets","Nuggets","Pacers","Pelicans","Pistons","Raptors","Rockets","SacraKings","Spurs","Suns","Thunder","Timberwolves","Wizards",
          // Agrega más equipos según sea necesario
        ],
      };
    },
    methods: {
      seleccionarEquipo(equipo) {
        console.log(`Equipo seleccionado: ${equipo}`);
        // Aquí puedes agregar la lógica para manejar la selección del equipo
      },
    },
  };
  </script>
  
  <style>
  html,
  body {
    height: 100%;
    margin: 0;
    background-color: #000000; /* Fondo negro */
  }
  
  .container {
    padding: 20px;
    text-align: center;
    max-width: 100%; /* Ajusta el ancho máximo del contenedor */
    overflow-x: hidden; /* Oculta la barra de desplazamiento horizontal */
    margin: auto; /* Centra el contenedor horizontalmente */
    min-height: 100vh; /* Altura mínima del contenedor igual a la altura de la ventana */
    display: flex; /* Utiliza flexbox para centrar verticalmente el contenido */
    flex-direction: column; /* Apila los elementos verticalmente */
    justify-content: center; /* Centra el contenido verticalmente */
  }
  
  .title {
    color: white; /* Texto blanco */
    font-size: 2em;
    margin-top: 20px; /* Margen superior */
    margin-bottom: 20px; /* Margen inferior */
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr); /* 6 columnas */
    grid-template-rows: repeat(5, auto); /* 5 filas */
    gap: 10px;
  }
  
  .team-container {
    width: 100px; /* Tamaño fijo para el cuadro blanco */
    height: 80px; /* Tamaño fijo para el cuadro blanco */
    background-color: #FFFFFF; /* Fondo blanco */
  }
  
  .team-logo {
    width: 70%; /* Reducir el tamaño de los escudos */
    height: auto; /* Ajusta automáticamente la altura */
    max-width: 100%; /* Ajusta el ancho máximo de la imagen */
    display: block; /* Asegura que las imágenes estén centradas */
    margin: auto; /* Centra las imágenes verticalmente */
  }
  </style>
  