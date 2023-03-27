import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

import Usuario from "./Usuario.js";

const Area = sequelize.define("Area", {
    nombre: {
        type: DataTypes.STRING(200),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING(300),
        allowNull: false
    },
}, {
    tableName: "Area",
    timestamps: false
});

export default Area;