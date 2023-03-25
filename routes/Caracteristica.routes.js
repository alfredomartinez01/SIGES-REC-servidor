import express from "express";
import checkAuth from "../middlewares/checkAuth.js"; // Middleware de autenticación
import {
    obtenerCaracteristicas,
    crearCaracteristica,
    actualizarCaracteristica,
    eliminarCaracteristica
} from "../controllers/CaracteristicaController.js";


const router = express.Router();

/* Registramos los end-points */
router.route("/")
    .get(checkAuth, obtenerCaracteristicas)
    .post(checkAuth, crearCaracteristica);

router.route("/:id")
    .put(checkAuth, actualizarCaracteristica)
    .delete(checkAuth, eliminarCaracteristica)

export default router;