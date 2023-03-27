import express from "express";
import checkAuth from "../middlewares/checkAuth.js"; // Middleware de autenticación
import {
    obtenerAreas,
    crearArea,
    actualizarArea,
    eliminarArea
} from "../controllers/AreaController.js";


const router = express.Router();

/* Registramos los end-points */
router.route("/")
    .get(checkAuth, obtenerAreas)
    .post(checkAuth, crearArea)

router.route("/:id")
    .put(checkAuth, actualizarArea)
    .delete(checkAuth, eliminarArea)
    

export default router;