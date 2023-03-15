/* ARCHIVO DE CONEXIÓN Y SINCRONIZACIÓN CON LA BASE DE DATOS---- */
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config(); // Configuración de variables de entorno

// Conexión de sequelize a exportar activando SSL
export const sequelize = new Sequelize(process.env.DB_CONNECTION, {
    logging: false,                     // Desactiva los logs de sequelize
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})