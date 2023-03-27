import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

import Material from "./Material.js";

const Bitacora = sequelize.define("Bitacora", {
    "idBitacora": {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    "comentario": {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    "fecha": {
        type: DataTypes.DATE,
        allowNull: false
    },
    "vida_util": {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    "n_piezas_agrupacion": {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    "tiene_percance": {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    "tipo_percance": {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    "descripcion_percance": {
        type: DataTypes.STRING(300),
        allowNull: false
    },
}, {
    tableName: "Bitacora",
    timestamps: false
});

// relación N:1 entre la tabla Bitacora y la tabla Material (idMaterial)
Material.hasMany(Bitacora, {
    foreignKey: "idMaterial",
    allowNull: false
});
Bitacora.belongsTo(Material, {
    foreignKey: "idMaterial",
    allowNull: false
});

export default Bitacora;