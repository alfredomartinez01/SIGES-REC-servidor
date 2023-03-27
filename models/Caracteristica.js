import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";


const Caracteristica = sequelize.define('Caracteristica', {
    "nombre": {
        type: DataTypes.STRING,
        allowNull: false
    },
    "tipo_dato": {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'caracteristicas',
    timestamps: false,
    primaryKey: ['nombre', 'tipo_dato']
});

export default Caracteristica;