import express from "express";
import axios from "axios";

const router = express.Router();

const path = "/pokemon/";
const path2 = "/pokemonAndTypes/";
const api = "https://pokeapi.co/api/v2/pokemon";

// Obtener los 100 primeros pokemons
router.get(path, async (req, res) => {
  try {
    const response = await axios.get(`${api}?limit=100`);
    res.status(response.status).json(response.data);
  } catch (error) {
    const { status = 500, statusText = "Internal Server Error" } =
      error.response || {};
    res.status(status).json({
      message: `Error al obtener la lista de pokemons: ${statusText}`,
    });
  }
});

// Obtener un pokemon por ID y devolver el nombre y los tipos
router.get(`${path}:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const {
      data: { name, types },
      status,
    } = await axios.get(`${api}/${id}`);
    res.status(status).json({ name, types });
  } catch (error) {
    const { status = 500, statusText = "Error interno del servidor" } =
      error.response || {};
    res
      .status(status)
      .json({ message: `Error al obtener el pokemon: ${statusText}` });
  }
});

// Obtener un pokemon por ID y devolver el nombre, los tipos en español y japonés
router.get(`${path2}:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const {
      data: { name, types },
      status,
    } = await axios.get(`${api}/${id}`);

    // Obtener la información completa de los tipos en español y japonés
    const typeInfo = await Promise.all(
      types.map(async (type) => {
        const { data: typeData } = await axios.get(type.type.url);
        const [esName, jaName] = typeData.names
          .filter((name) => ["es", "ja"].includes(name.language.name))
          .map((name) => name.name);
        return {
          slot: type.slot,
          type: {
            name: type.type.name,
            url: type.type.url,
            names: [
              {
                language: {
                  name: "es",
                  url: "https://pokeapi.co/api/v2/language/7/",
                },
                name: esName,
              },
              {
                language: {
                  name: "ja",
                  url: "https://pokeapi.co/api/v2/language/11/",
                },
                name: jaName,
              },
            ],
          },
        };
      })
    );

    res.status(status).json({ name, types: typeInfo });
  } catch (error) {
    const { status = 500, statusText = "Error interno del servidor" } =
      error.response || {};
    res
      .status(status)
      .json({ message: `Error al obtener el pokemon: ${statusText}` });
  }
});

export default router;
