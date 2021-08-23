"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var auth_1 = require("./routes/auth");
var main_1 = require("./routes/main");
var products_1 = require("./routes/products");
var connection_1 = require("./db/connection");
var app = express_1.default();
var port = process.env.PORT || 3000;
// Dotenv
dotenv_1.default.config();
// Bodyparser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
// Cors
app.use(cors_1.default());
// Routing
app.use(main_1.router);
app.use(products_1.router);
app.use(auth_1.router);
// Listen
app.listen(port, function () {
    connection_1.sequelize.sync();
    console.log("Aplicación escuchando en el puerto 3000.");
});
