import express from "express";
import checkAuth from "../middlewares/checkAuth.js"; // Middleware de autenticación
import {
    obtenerSugerencias,
    crearSugerencia,
    actualizarSugerencia
} from "../controllers/SugerenciaMatController.js";


const router = express.Router();

/* Registramos los end-points */
router.route("/")
    .get(checkAuth, obtenerSugerencias)
    .post(checkAuth, crearSugerencia);

router.route("/:id")
    .put(checkAuth, actualizarSugerencia);

export default router;