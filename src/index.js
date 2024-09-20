import express from "express";
import "dotenv/config";

const app = express();

//Puerto
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
