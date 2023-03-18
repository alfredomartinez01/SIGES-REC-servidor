import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

import Material from "./Material.js";

const Usuario = sequelize.define("Usuario", {
    "nombre": {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "Usuarios",
    timestamps: false
});

Usuario.hasMany(Material, {
    foreignKey: "idUsuario"
});

export default Usuario;