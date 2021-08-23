import express, { Router } from "express";

export const router: Router = Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.json({
    message: "Homepage",
  });
});

export { router as default };
