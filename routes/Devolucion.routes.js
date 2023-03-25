import express from "express";
import checkAuth from "../middlewares/checkAuth.js"; // Middleware de autenticación
import {
    obtenerDevolucion,
    generarDevolucion
} from "../controllers/DevolucionController.js";


const router = express.Router();

/* Registramos los end-points */
router.route("/")
    .post(checkAuth, generarDevolucion);

router.route("/:id")
    .get(checkAuth, obtenerDevolucion);

export default router;