import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const Categoria = sequelize.define("Categoria", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
}, {
    tableName: "Categoria",
    timestamps: false
});

export default Categoria;