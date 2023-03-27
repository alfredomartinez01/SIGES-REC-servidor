import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

import Area from "./Area.js";
import Categoria from "./Categoria.js";

const Material = sequelize.define("Material", {
    idMaterial: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    fecha_adquisicion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fotogqrafias: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    condiciones_prestamo: {
        type: DataTypes.STRING(600),
        allowNull: false
    },
    costo: {
        type: DataTypes.DECIMAL(20, 2),
        allowNull: false
    },
    notificar: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    presentacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    agrupa: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    seguimiento_individual: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
}, {
    tableName: "Material",
    timestamps: false
});

// relación N:1 entre la tabla Material y la tabla Area (Area_nombre)
Area.hasMany(Material, {
    foreignKey: "Area_nombre",
    allowNull: false
});
Material.belongsTo(Area, {
    foreignKey: "Area_nombre",
    allowNull: false
});

// relación N:1 entre la tabla Material y la tabla Categoria (Categoria_nombre)
Categoria.hasMany(Material, {
    foreignKey: "Categoria_nombre",
    allowNull: false
});
Material.belongsTo(Categoria, {
    foreignKey: "Categoria_nombre",
    allowNull: false
});

// relacion N:1 entre la tabla Material y la tabla Material (Material_idMaterial)
Material.hasMany(Material, {
    foreignKey: "Material_idMaterial",
    allowNull: false
});
Material.belongsTo(Material, {
    foreignKey: "Material_idMaterial",
    allowNull: false
});

export default Material;