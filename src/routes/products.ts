import express, { Router } from "express";

import { Product } from "../db/models/Products";
import { rutasProtegidas } from "../middlewares/token";

export const router: Router = Router();

interface NuevoProducto {
  nombre: string;
  categoria: string;
  descripcion: string;
  disponibles: number;
  precio: number;
  rutaImagen: string;
}

router.post(
  "/agregarproducto",
  rutasProtegidas,
  async (req: express.Request, res: express.Response) => {
    const nuevoProducto: NuevoProducto = {
      nombre: req.body.nombre,
      categoria: req.body.categoria,
      descripcion: req.body.descripcion,
      disponibles: req.body.disponibles,
      precio: req.body.precio,
      rutaImagen: req.body.rutaImagen,
    };

    Product.sync();
    try {
      const lastProductCreated = await Product.create(nuevoProducto);
      res.json({
        message: "Success",
        product: nuevoProducto,
      });
    } catch {
      res.json({
        message: "Error",
      });
    }
  }
);

router.get(
  "/verproductos",
  async (req: express.Request, res: express.Response) => {
    Product.sync();
    res.json(await Product.findAll());
  }
);

router.get(
  "/verproductos/:id",
  async (req: express.Request, res: express.Response) => {
    Product.sync();
    res.json(await Product.findByPk(req.params.id));
  }
);

router.get(
  "/vercategoria/:categoria",
  async (req: express.Request, res: express.Response) => {
    Product.sync();
    res.json(
      await Product.findAll({
        where: {
          categoria: req.params.categoria,
        },
      })
    );
  }
);

router.post(
  "/editarproducto/:id",
  rutasProtegidas,
  async (req: express.Request, res: express.Response) => {
    Product.sync();

    const productoEditado: NuevoProducto = {
      nombre: req.body.nombre,
      categoria: req.body.categoria,
      descripcion: req.body.descripcion,
      disponibles: req.body.disponibles,
      precio: req.body.precio,
      rutaImagen: req.body.rutaImagen,
    };

    try {
      console.log(req.params.id);
      const productoEditadoResponse = await Product.update(productoEditado, {
        where: {
          id: req.params.id,
        },
      });
      res.json({
        message: "Success",
        product: productoEditado,
      });
    } catch {
      res.json({
        message: "Error",
      });
    }
  }
);

router.delete(
  "/borrarproducto/:id",
  rutasProtegidas,
  async (req: express.Request, res: express.Response) => {
    Product.sync();
    Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.json({
      message: "Eliminado de manera exitosa",
    });
  }
);

export { router as default };
