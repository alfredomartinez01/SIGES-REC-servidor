import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

import Usuario from "./Usuario.js";
import Actividad from "./Actividad.js";

const Prestamo = sequelize.define('Prestamo', {
    idPrestamo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    vale_resg: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_dev_esperada: {
        type: DataTypes.DATE,
        allowNull: false
    },
    notificar: {
        type: DataTypes.STRING,
        allowNull: false
    },
    vale_resguardo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: "Prestamo",
    timestamps: false
});

// relación N:1 entre la tabla Prestamo y la tabla Usuario (idAsociado)
Prestamo.belongsTo(Usuario, { foreignKey: 'idAsociado' });
Usuario.hasMany(Prestamo, { foreignKey: 'idAsociado' });

// relación N:1 entre la tabla Prestamo y la tabla Usuario (idResponsable)
Prestamo.belongsTo(Usuario, { foreignKey: 'idResponsable' });
Usuario.hasMany(Prestamo, { foreignKey: 'idResponsable' });

// relación N:1 entre la tabla Prestamo y la tabla Actividad (idActividad)
Prestamo.belongsTo(Actividad, { foreignKey: 'idActividad' });
Actividad.hasMany(Prestamo, { foreignKey: 'idActividad' });

export default Prestamo;