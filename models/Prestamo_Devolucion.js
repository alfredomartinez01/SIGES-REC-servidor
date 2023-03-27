import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

import Prestamo from "./Prestamo.js";
import Devolucion from "./Devolucion.js";
import Material from "./Material.js";
import Bitacora from "./Bitacorag.js";

const Prestamo_Devolucion = sequelize.define('Prestamo_Devolucion', {
    idPrestamo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    idDevolucion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    devolvera: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    n_prestados: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    tableName: "Prestamo_Devolucion",
    timestamps: false,
    primaryKey: ['idPrestamo', 'idDevolucion']
});

// relación N:1 entre la tabla Prestamo_Devolucion y la tabla Prestamo (idPrestamo)
Prestamo.hasMany(Prestamo_Devolucion, {
    foreignKey: 'idPrestamo',
    allowNull: false
});
Prestamo_Devolucion.belongsTo(Prestamo, {
    foreignKey: 'idPrestamo',
    allowNull: false
});

// relación N:1 entre la tabla Prestamo_Devolucion y la tabla Devolucion (idDevolucion)
Devolucion.hasMany(Prestamo_Devolucion, {
    foreignKey: 'idDevolucion',
    allowNull: false
});
Prestamo_Devolucion.belongsTo(Devolucion, {
    foreignKey: 'idDevolucion',
    allowNull: false
});

// relación 1:1 entre la tabla Prestamo_Devolucion y la tabla Material (idMaterial)
Material.hasOne(Prestamo_Devolucion, {
    foreignKey: 'idMaterial',
    allowNull: false
});
Prestamo_Devolucion.belongsTo(Material, {
    foreignKey: 'idMaterial',
    allowNull: false
});

// relación 1:1 entre la tabla Prestamo_Devolucion y la tabla Bitacora (idBitacora)
Bitacora.hasOne(Prestamo_Devolucion, {
    foreignKey: 'idBitacoraPrestamo',
    allowNull: false
});
Prestamo_Devolucion.belongsTo(Bitacora, {
    foreignKey: 'idBitacoraPrestamo',
    allowNull: false
});

// relación 1:1 entre la tabla Prestamo_Devolucion y la tabla Bitacora (idBitacora)
Bitacora.hasOne(Prestamo_Devolucion, {
    foreignKey: 'idBitacoraDevolucion',
    allowNull: false
});
Prestamo_Devolucion.belongsTo(Bitacora, {
    foreignKey: 'idBitacoraDevolucion',
    allowNull: false
});

export default Prestamo_Devolucion;