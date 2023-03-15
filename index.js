import dotenv from "dotenv";
import { sequelize } from "./config/db.js";
import app from "./app.js";

async function main() {
    try {
        dotenv.config(); // Configuración de variables de entorno
        // await sequelize.sync({ alter: true}); // Sincronización de modelos con la base de datos

        // Puerto definido por default o tomado de servidor
        const PORT = process.env.PORT || 4000;

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

}

main();