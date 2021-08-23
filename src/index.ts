import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { router as loginRouter } from "./routes/auth";
import { router as mainRouter } from "./routes/main";
import { router as productsRouter } from "./routes/products";
import { sequelize } from "./db/connection";

const app: express.Application = express();
const port: number = (process.env.PORT as any) || 3000;

// Dotenv
dotenv.config();

// Bodyparser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Cors
app.use(cors());

// Routing
app.use(mainRouter);
app.use(productsRouter);
app.use(loginRouter);

// Listen
app.listen(port, () => {
  sequelize.sync();
  console.log("Aplicación escuchando en el puerto 3000.");
});
