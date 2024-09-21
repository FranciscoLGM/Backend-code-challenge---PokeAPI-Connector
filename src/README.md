# API de Pokémon

---

Esta API proporciona información sobre los pokémon, incluyendo su nombre, tipos y nombres de los tipos en español y japonés.

## Requisitos previos

---

    * Node.js (versión 14 o superior)
    * npm (versión 6 o superior)

## Instalación

---

    * Clona el repositorio: git clone https://github.com/FranciscoLGM/Backend-code-challenge---PokeAPI-Connector.git
    * Instala las dependencias: npm install
    * Configura las variables de entorno en un archivo .env (opcional)

## Ejecución

---

    * Inicia el servidor: npm start
    * La API estará disponible en http://localhost:3000/api/

## Endpoints

---

    * GET /pokemon/: Obtiene los 100 primeros pokémon
    * GET /pokemon/:id: Obtiene un pokémon por ID y devuelve su nombre y tipos
    * GET /pokemonAndTypes/:id: Obtiene un pokémon por ID y devuelve su nombre, tipos en español y japonés

## Tecnologías utilizadas

---

    * Node.js: entorno de ejecución de JavaScript
    * Express.js: framework para crear aplicaciones web
    * Axios: biblioteca para realizar solicitudes HTTP
    * PokeAPI: API oficial de Pokémon para obtener información sobre los pokémon

## Notas

---

    * La API utiliza la PokeAPI oficial para obtener información sobre los pokémon.
    * La API devuelve los datos en formato JSON.
