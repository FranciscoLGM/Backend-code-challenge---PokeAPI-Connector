import express from "express";
import axios from "axios";

const router = express.Router();

const path = "/";
const api = "https://pokeapi.co/api/v2/pokemon";

// Obtener los 100 primeros pokemons
router.get(path, (req, res) => {
  axios
    .get(`${api}/?limit=100&offset=100`)
    .then((response) => {
      const pokemons = response.data;
      res.send(pokemons);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({
        message: "Error al obtener la lista de pokemons",
      });
    });
});
