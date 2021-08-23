import { DataTypes, Model } from "sequelize";

import { sequelize } from "../connection";

export class Compras extends Model {}

Compras.init(
  {
    idCompra: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idComprador: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombreComprador: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correoComprador: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    statusCompra: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    linkCompra: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);
