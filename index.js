import express, { Router } from "express";
import "dotenv/config";
import routes from "./src/routes/routes.js";

const app = express();

//Puerto
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes.js como middleware
app.use("/api/", routes);

//Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
