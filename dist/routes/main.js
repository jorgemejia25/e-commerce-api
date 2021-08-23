"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.router = void 0;
var express_1 = require("express");
exports.router = express_1.Router();
exports.default = exports.router;
exports.router.get("/", function (req, res) {
    res.json({
        message: "Homepage",
    });
});
