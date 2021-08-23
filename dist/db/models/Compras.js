"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compras = void 0;
var sequelize_1 = require("sequelize");
var connection_1 = require("../connection");
var Compras = /** @class */ (function (_super) {
    __extends(Compras, _super);
    function Compras() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Compras;
}(sequelize_1.Model));
exports.Compras = Compras;
Compras.init({
    idCompra: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    idComprador: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    nombreComprador: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    correoComprador: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    statusCompra: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    linkCompra: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: connection_1.sequelize,
});
