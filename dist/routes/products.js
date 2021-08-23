"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.router = void 0;
var express_1 = require("express");
var Products_1 = require("../db/models/Products");
var token_1 = require("../middlewares/token");
exports.router = express_1.Router();
exports.default = exports.router;
exports.router.post("/agregarproducto", token_1.rutasProtegidas, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var nuevoProducto, lastProductCreated, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                nuevoProducto = {
                    nombre: req.body.nombre,
                    categoria: req.body.categoria,
                    descripcion: req.body.descripcion,
                    disponibles: req.body.disponibles,
                    precio: req.body.precio,
                    rutaImagen: req.body.rutaImagen,
                };
                Products_1.Product.sync();
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Products_1.Product.create(nuevoProducto)];
            case 2:
                lastProductCreated = _b.sent();
                res.json({
                    message: "Success",
                    product: nuevoProducto,
                });
                return [3 /*break*/, 4];
            case 3:
                _a = _b.sent();
                res.json({
                    message: "Error",
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.router.get("/verproductos", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                Products_1.Product.sync();
                _b = (_a = res).json;
                return [4 /*yield*/, Products_1.Product.findAll()];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [2 /*return*/];
        }
    });
}); });
exports.router.get("/verproductos/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                Products_1.Product.sync();
                _b = (_a = res).json;
                return [4 /*yield*/, Products_1.Product.findByPk(req.params.id)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [2 /*return*/];
        }
    });
}); });
exports.router.get("/vercategoria/:categoria", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                Products_1.Product.sync();
                _b = (_a = res).json;
                return [4 /*yield*/, Products_1.Product.findAll({
                        where: {
                            categoria: req.params.categoria,
                        },
                    })];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [2 /*return*/];
        }
    });
}); });
exports.router.post("/editarproducto/:id", token_1.rutasProtegidas, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productoEditado, productoEditadoResponse, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                Products_1.Product.sync();
                productoEditado = {
                    nombre: req.body.nombre,
                    categoria: req.body.categoria,
                    descripcion: req.body.descripcion,
                    disponibles: req.body.disponibles,
                    precio: req.body.precio,
                    rutaImagen: req.body.rutaImagen,
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                console.log(req.params.id);
                return [4 /*yield*/, Products_1.Product.update(productoEditado, {
                        where: {
                            id: req.params.id,
                        },
                    })];
            case 2:
                productoEditadoResponse = _b.sent();
                res.json({
                    message: "Success",
                    product: productoEditado,
                });
                return [3 /*break*/, 4];
            case 3:
                _a = _b.sent();
                res.json({
                    message: "Error",
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.router.delete("/borrarproducto/:id", token_1.rutasProtegidas, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        Products_1.Product.sync();
        Products_1.Product.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json({
            message: "Eliminado de manera exitosa",
        });
        return [2 /*return*/];
    });
}); });
