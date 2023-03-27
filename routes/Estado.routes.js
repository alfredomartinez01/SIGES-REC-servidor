import express from "express";
import checkAuth from "../middlewares/checkAuth.js"; // Middleware de autenticación
import {
    obtenerEstados,
    crearEstado
} from "../controllers/EstadoController.js";


const router = express.Router();

/* Registramos los end-points */
router.route("/")
    .get(checkAuth, obtenerEstados)
    .post(checkAuth, crearEstado);

export default router;