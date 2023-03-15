import express from "express";
import cors from "cors";

const app = express();
app.use(express.json()); // Habilitamos json

// Configuración de cors
const whiteList = [process.env.FRONTEND_URL, undefined]; // Lista de dominios que van a tener acceso a la API
const corsOptions = {
    origin: function (origin, callback) { // Función que se ejecuta cuando se hace una petición
        if (whiteList.includes(origin)) {
            callback(null, true); // No mandamos error y permitimos el acceso
        } else {
            callback(new Error("No permitido por CORS")); // Enviamos un error
        }
    }
};
app.use(cors(corsOptions)); // Habilitamos cors

/* Agregando rutas */

export default app;