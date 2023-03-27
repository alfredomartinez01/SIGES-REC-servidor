import express from "express";
import checkAuth from "../middlewares/checkAuth.js"; // Middleware de autenticación
import {
    obtenerActividades,
    obtenerActividad,
    crearActividad,
    actualizarActividad,
    eliminarActividad
} from "../controllers/ActividadController.js";


const router = express.Router();

/* Registramos los end-points */
router.route("/")
    .get(checkAuth, obtenerActividades)
    .post(checkAuth, crearActividad)

router.route("/:id")
    .get(checkAuth, obtenerActividad)
    .put(checkAuth, actualizarActividad)
    .delete(checkAuth, eliminarActividad)

export default router;