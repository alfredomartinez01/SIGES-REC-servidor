import express from "express";
import cors from "cors";

import ActividadRoutes from "./routes/Actividad.routes.js";
import AreaRoutes from "./routes/Area.routes.js";
import BitacoraRoutes from "./routes/Bitacora.routes.js";
import CaracteristicaRoutes from "./routes/Caracteristica.routes.js";
import CategoriaRoutes from "./routes/Categoria.routes.js";
import DevolucionRoutes from "./routes/Devolucion.routes.js";
import EstadoRoutes from "./routes/Estado.routes.js";
import MaterialRoutes from "./routes/Material.routes.js";
import NotificacionRoutes from "./routes/Notificacion.routes.js";
import PrestamoRoputes from "./routes/Prestamo.routes.js";
import SugerenciaMatRoutes from "./routes/SugerenciaMat.routes.js";
import UsuarioRoutes from "./routes/Usuario.routes.js";

const app = express();
app.use(express.json()); // Habilitamos json

// Configuración de cors
const whiteList = [process.env.FRONTEND_URL, undefined]; // Lista de dominios que van a tener acceso a la API
const corsOptions = {
    origin: function (origin, callback) { // Función que se ejecuta cuando se hace una petición
        if (whiteList.includes(origin)) {
            callback(null, true); // No mandamos error y permitimos el acceso
        } else {
            callback(new Error("No permitido por CORS")); // Enviamos un error
        }
    }
};
app.use(cors(corsOptions)); // Habilitamos cors

/* Agregando rutas */
app.use("/api/actividades", ActividadRoutes);
app.use("/api/areas", AreaRoutes);
app.use("/api/bitacoras", BitacoraRoutes);
app.use("/api/caracteristicas", CaracteristicaRoutes);
app.use("/api/categorias", CategoriaRoutes);
app.use("/api/devoluciones", DevolucionRoutes);
app.use("/api/estados", EstadoRoutes);
app.use("/api/materiales", MaterialRoutes);
app.use("/api/notificaciones", NotificacionRoutes);
app.use("/api/prestamos", PrestamoRoputes);
app.use("/api/sugerencias-material", SugerenciaMatRoutes);
app.use("/api/usuarios", UsuarioRoutes);

export default app;