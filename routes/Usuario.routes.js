import express from "express";
import checkAuth from "../middlewares/checkAuth.js"; // Middleware de autenticación
import {
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
    autenticar,
    confirmarCuenta,
    olvidePassword,
    validarToken,
    actualizarPassword
} from "../controllers/UsuarioController.js";


const router = express.Router();

/* Registramos los end-points */
router.route("/")
    .get(checkAuth, obtenerUsuarios)
    .post(crearUsuario);

router.route("/:id")
    .get(checkAuth, obtenerUsuario)
    .put(checkAuth, actualizarUsuario)
    .delete(checkAuth, eliminarUsuario);

router.post("/autenticar", autenticar);
router.post("/confirmar-cuenta/:token", confirmarCuenta);
router.post("/olvide-password", olvidePassword);
router.get("/validar-token/:token", validarToken);
router.post("/actualizar-password", checkAuth, actualizarPassword);

export default router;