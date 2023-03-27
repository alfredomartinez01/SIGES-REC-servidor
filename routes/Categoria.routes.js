import express from "express";
import checkAuth from "../middlewares/checkAuth.js"; // Middleware de autenticación
import {
    obtenerCagorias,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria
} from "../controllers/CategoriaController.js";


const router = express.Router();

/* Registramos los end-points */
router.route("/")
    .get(checkAuth, obtenerCagorias)
    .post(checkAuth, crearCategoria);

router.route("/:id")
    .put(checkAuth, actualizarCategoria)
    .delete(checkAuth, eliminarCategoria)

export default router;