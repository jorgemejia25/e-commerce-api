import * as dotenv from "dotenv";

import express from "express";
import jwt from "jsonwebtoken";

dotenv.config();

export const rutasProtegidas = express.Router();
rutasProtegidas.use((req: any, res: express.Response, next) => {
  const token: any = req.headers["access-token"]!;

  if (token) {
    jwt.verify(token, process.env.TOKEN!, (err: any, decoded: any) => {
      if (err) {
        return res.json({ mensaje: "Token inválida" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.send({
      mensaje: "Token no proveída.",
    });
  }
});
