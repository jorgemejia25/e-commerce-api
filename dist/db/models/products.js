"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var sequelize_1 = require("sequelize");
var connection_1 = require("../connection");
exports.Product = connection_1.sequelize.define("Product", {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    categoria: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "No establecida.",
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "",
    },
    disponibles: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    precio: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: false,
    },
    rutaImagen: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "noimage.png",
    },
});
