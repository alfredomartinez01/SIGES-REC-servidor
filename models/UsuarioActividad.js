import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

import Usuario from "./Usuario.js";
import Actividad from "./Actividad.js";

const UsuarioActividad = sequelize.define('UsuarioActividad', {
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    idActividad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    rol_actividad: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "UsuarioActividad",
    timestamps: false,
    primaryKey: ['idUsuario', 'idActividad']
});

// relación N:1 entre la tabla UsuarioActividad y la tabla Usuario (idUsuario)
Usuario.hasMany(UsuarioActividad, { foreignKey: 'idUsuario' });
UsuarioActividad.belongsTo(Usuario, { foreignKey: 'idUsuario' });

// relación N:1 entre la tabla UsuarioActividad y la tabla Actividad (idActividad)
Actividad.hasMany(UsuarioActividad, { foreignKey: 'idActividad' });
UsuarioActividad.belongsTo(Actividad, { foreignKey: 'idActividad' });

export default UsuarioActividad;