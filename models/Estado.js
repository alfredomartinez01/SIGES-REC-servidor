import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

import Material from "./Material.js";

const Estado = sequelize.define("Estado", {
    idEstado: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    prestado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    observacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: "Estado",
    timestamps: false
});

// relación N:1 entre la tabla Estado y la tabla Material (idMaterial)
Material.hasMany(Estado, {
    foreignKey: "idMaterial",
    allowNull: false
});
Estado.belongsTo(Material, {
    foreignKey: "idMaterial",
    allowNull: false
});


export default Estado;