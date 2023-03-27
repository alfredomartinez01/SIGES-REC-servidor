import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

import Comentario_Exp from "./Comentario_Exp.js";

const Devolucion = sequelize.define('Devolucion', {
    idDevolucion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    calif_asociado: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    vale_resguardo: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Devolucion',
    timestamps: false
});

// relacion 1:1 entre la tabla Devolucion y la tabla Comentario_Exp (idComentario_Exp)
Devolucion.hasOne(Comentario_Exp, {
    foreignKey: 'idComentario_Exp',
    allowNull: false
});
Comentario_Exp.belongsTo(Devolucion, {
    foreignKey: 'idComentario_Exp',
    allowNull: false
});

export default Devolucion;