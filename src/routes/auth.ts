import * as dotenv from "dotenv";

import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

export const router = Router();

router.post("/login", async (req, res) => {
  if (req.body.user == "admin" && req.body.password == 12345) {
    const payload = {
      check: true,
    };
    const token = jwt.sign(payload, process.env.TOKEN!, {
      expiresIn: 1440,
    });

    res.json({
      mensaje: "Autenticación correcta",
      token,
    });
  } else {
    res.json({
      Error: "true",
      Message: "User no encontrado",
    });
  }
});
