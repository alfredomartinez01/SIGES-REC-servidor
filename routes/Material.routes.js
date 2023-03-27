import express from "express";
import checkAuth from "../middlewares/checkAuth.js"; // Middleware de autenticación
import {
    obtenerMateriales,
    obtenerMaterial,
    crearMaterial,
    actualizarMaterial,
    eliminarMaterial
} from "../controllers/MaterialController.js";


const router = express.Router();

/* Registramos los end-points */
router.route("/")
    .get(checkAuth, obtenerMateriales)
    .post(checkAuth, crearMaterial);

router.route("/:id")
    .get(checkAuth, obtenerMaterial)
    .put(checkAuth, actualizarMaterial)
    .delete(checkAuth, eliminarMaterial);

export default router;