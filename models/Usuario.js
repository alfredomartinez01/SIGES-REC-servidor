import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

import Area from "./Area.js";

const Usuario = sequelize.define("Usuario", {
    idUsuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(256),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    identificador_org: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fotografia: {
        type: DataTypes.STRING,
        allowNull: true
    },
    privilegios: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    calificacion_promedio: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    n_posesion: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    n_percances: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: "Usuario",
    timestamps: false
});

// relación N:1 entre la tabla Usuario y la tabla Area (Area_nombre)
Area.hasMany(
    Usuario, {
        foreignKey: 'Area_nombre',
        allowNull: false
    });
Usuario.belongsTo(Area, {
    foreignKey: 'Area_nombre',
    allowNull: false
});



export default Usuario;