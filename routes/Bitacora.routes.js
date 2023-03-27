import express from "express";
import checkAuth from "../middlewares/checkAuth.js"; // Middleware de autenticación
import {
    obtenerBitacoras,
    obtenerBitacora,
    crearBitacora,
    actualizarBitacora,
    eliminarBitacora
} from "../controllers/BitacoraController.js";


const router = express.Router();

/* Registramos los end-points */
router.route("/")
    .get(checkAuth, obtenerBitacoras)
    .post(checkAuth, crearBitacora);

router.route("/:id")
    .get(checkAuth, obtenerBitacora)
    .put(checkAuth, actualizarBitacora)
    .delete(checkAuth, eliminarBitacora);
    
export default router;