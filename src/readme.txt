Pasos de Instalación
1. Clonar el Repositorio
Primero, clona el repositorio del proyecto a tu máquina local.

2. Instalar Dependencias
Una vez dentro del directorio del proyecto, necesitas instalar todas las dependencias necesarias. Esto se hace ejecutando el comando npm install en la terminal. npm se encargará de descargar e instalar todas las bibliotecas y paquetes que tu proyecto requiere.

3. Configurar Variables de Entorno
Si tu proyecto utiliza variables de entorno, debes crear un archivo llamado .env en la raíz del proyecto. Este archivo debe contener todas las variables necesarias para que tu aplicación funcione correctamente. Normalmente, un archivo de ejemplo llamado .env.example está incluido en el proyecto, donde puedes ver qué variables son necesarias y sus formatos.

4. Ejecutar el Servidor de Desarrollo
Para iniciar el servidor de desarrollo, debes ejecutar el comando npm run serve en la terminal. Esto iniciará el servidor y tu aplicación estará disponible en http://localhost:8080 por defecto.

5. Compilar para Producción
Si deseas preparar tu aplicación para un entorno de producción, necesitas compilarla. Esto se hace ejecutando el comando npm run build en la terminal. Los archivos optimizados resultantes se generarán en una carpeta llamada dist, lista para ser desplegada en un servidor de producción.

Problemas Comunes y Soluciones
Error: "npm: command not found"
Asegúrate de que Node.js y npm estén correctamente instalados en tu sistema. Puedes verificarlo ejecutando los comandos node -v y npm -v para confirmar que ambas herramientas están disponibles.

Error de Permisos al Ejecutar npm install
Si encuentras problemas de permisos al intentar instalar dependencias, puedes intentar ejecutar el comando con privilegios de administrador (usando sudo en sistemas Unix).

Problemas con Dependencias
Si tienes problemas con las dependencias, una solución común es borrar la carpeta node_modules y el archivo package-lock.json, y luego reinstalar las dependencias. Esto puede resolver conflictos y asegurar una instalación limpia.
