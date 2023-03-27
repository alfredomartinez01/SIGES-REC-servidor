import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

import Material from "./Material.js";
import Prestamo from "./Prestamo.js";
import Usuario from "./Usuario.js";

const Notificacion = sequelize.define("Notificacion", {
    idNotificacion: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    tipo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    codigo_sala: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: "Notificacion",
    timestamps: false
});

// relación N:1/0 entre la tabla Notificacion y la tabla Material (idMaterial)
Material.hasMany(Notificacion, {
    foreignKey: "idMaterial",
    allowNull: true
});
Notificacion.belongsTo(Material, {
    foreignKey: "idMaterial",
    allowNull: true
});

// relación N:1/0 entre la tabla Notificacion y la tabla Prestamo (idPrestamo)
Prestamo.hasMany(Notificacion, {
    foreignKey: "idPrestamo",
    allowNull: true
});
Notificacion.belongsTo(Prestamo, {
    foreignKey: "idPrestamo",
    allowNull: true
});

// relación N:1 entre la tabla Notificacion y la tabla Usuario (idUsuario)
Usuario.hasMany(Notificacion, {
    foreignKey: "idUsuario",
    allowNull: false
});
Notificacion.belongsTo(Usuario, {
    foreignKey: "idUsuario",
    allowNull: false
});

export default Notificacion;