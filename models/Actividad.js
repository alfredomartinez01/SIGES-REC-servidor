import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const Actividad = sequelize.define("Actividad", {
    idActividad: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombreAct: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {
    tableName: "Actividad",
    timestamps: false
});

export default Actividad;