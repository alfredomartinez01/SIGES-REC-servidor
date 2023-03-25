import express from "express";
import checkAuth from "../middlewares/checkAuth.js"; // Middleware de autenticación
import {
    obtenerNotificaciones,
    registrarNotificacion
} from "../controllers/NotificacionController.js";


const router = express.Router();

/* Registramos los end-points */
router.route("/")
    .get(checkAuth, obtenerNotificaciones)
    .post(checkAuth, registrarNotificacion);

export default router;