import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

import Usuario from "./Usuario.js";
import Categoria from "./Categoria.js";

const Sugerencia_material = sequelize.define("Sugerencia_material", {
    idSugerencia_material: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    estado: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
}, {
    tableName: "Sugerencia_material",
    timestamps: false
});

// relación N:1 entre la tabla Sugerencia_material y la tabla Usuario (idUsuario)
Usuario.hasMany(Sugerencia_material, {
    foreignKey: "idUsuario",
    allowNull: false
});
Sugerencia_material.belongsTo(Usuario, {
    foreignKey: "idUsuario",
    allowNull: false
});

// relación N:1 entre la tabla Sugerencia_material y la tabla Categoria (idCategoria)
Categoria.hasMany(Sugerencia_material, {
    foreignKey: "idCategoria",
    allowNull: false
});
Sugerencia_material.belongsTo(Categoria, {
    foreignKey: "idCategoria",
    allowNull: false
});

export default Sugerencia_material;