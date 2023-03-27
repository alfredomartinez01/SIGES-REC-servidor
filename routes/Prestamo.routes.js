import express from "express";
import checkAuth from "../middlewares/checkAuth.js"; // Middleware de autenticación
import {
    obtenerPrestamos,
    obtenerPrestamo,
    registrarPrestamo
} from "../controllers/PrestamoController.js";


const router = express.Router();

/* Registramos los end-points */
router.route("/")
    .get(checkAuth, obtenerPrestamos)
    .post(checkAuth, registrarPrestamo);

router.route("/:id")
    .get(checkAuth, obtenerPrestamo);

export default router;