import { DataTypes, Model } from "sequelize";

import { sequelize } from "../connection";

export const Product = sequelize.define("Product", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING,
    defaultValue: "No establecida.",
  },
  descripcion: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  disponibles: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  rutaImagen: {
    type: DataTypes.STRING,
    defaultValue: "noimage.png",
  },
});
