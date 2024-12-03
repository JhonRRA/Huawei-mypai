const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const chatbotRoutes = require("./routes/chatbotwsp");

dotenv.config();

const app = express();

// Middlewares
app.use(bodyParser.json());

// Rutas
app.use("/api", chatbotRoutes);

// Conexión a la Base de Datos y Servidor
const PORT = process.env.PORT || 3000;

connectDB();
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
