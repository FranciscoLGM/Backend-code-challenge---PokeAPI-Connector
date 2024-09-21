import express from "express";
import axios from "axios";
import e from "express";

const router = express.Router();

const path = "/";
const api = "https://pokeapi.co/api/v2/pokemon";

// Obtener los 100 primeros pokemons
router.get(path, async (req, res) => {
  try {
    const response = await axios.get(`${api}?limit=100`);
    res.status(response.status).json(response.data);
  } catch (error) {
    const { status, statusText } = error.response || {
      status: 500,
      statusText: "Internal Server Error",
    };
    res.status(status).json({
      message: `Error al obtener la lista de pokemons: ${statusText}`,
    });
  }
});

// Obtener un pokemon por ID
router.get(`${path}:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const { data, status } = await axios.get(`${api}/${id}`);
    const { name, types } = data;
    res.status(status).json({ name, types });
  } catch (error) {
    const { status = 500, statusText = "Error interno del servidor" } =
      error.response || {};
    res
      .status(status)
      .json({ message: `Error al obtener el pokemon: ${statusText}` });
  }
});

export default router;
