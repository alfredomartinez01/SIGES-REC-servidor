import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const Comentario_Exp = sequelize.define("Comentario_Exp", {
    idComentario_Exp: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    comentario: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    calificacion: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
}, {
    tableName: "Comentario_Exp",
    timestamps: false
});

export default Comentario_Exp;