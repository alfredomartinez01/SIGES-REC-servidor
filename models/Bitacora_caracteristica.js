import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

import Caracteristica from "./Caracteristica.js";
import Bitacora from "./Bitacora.js";

const Bitacora_caracteristica = sequelize.define('Bitacora_caracteristica', {
    idBitacora: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    Caracteristica_nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    Caracteristica_tipo_dato: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    valor: {
        type: DataTypes.STRING,
        allowNull: true
    },
    esSeguido: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'Bitacora_caracteristica',
    timestamps: false,
    primaryKey: ['idBitacora', 'Caracteristica_nombre', 'Caracteristica_tipo_dato']
});

// relación N:1 entre la tabla Bitacora_caracteristica y la tabla Bitacora (idBitacora)
Bitacora.hasMany(Bitacora_caracteristica, {
    foreignKey: 'idBitacora',
    allowNull: false
});
Bitacora_caracteristica.belongsTo(Bitacora, {
    foreignKey: 'idBitacora',
    allowNull: false
});

// relación N:1 entre la tabla Bitacora_caracteristica y la tabla Caracteristica (Caracteristica_nombre, Caracteristica_tipo_dato)
Caracteristica.hasMany(Bitacora_caracteristica, {
    foreignKey: ['Caracteristica_nombre', 'Caracteristica_tipo_dato'],
    allowNull: false
});
Bitacora_caracteristica.belongsTo(Caracteristica, {
    foreignKey: ['Caracteristica_nombre', 'Caracteristica_tipo_dato'],
    allowNull: false
});

export default Bitacora_caracteristica;