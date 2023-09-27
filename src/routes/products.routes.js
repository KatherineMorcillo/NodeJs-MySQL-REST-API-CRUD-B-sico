import { Router } from "express";
import {
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
  getProduct,
} from "../controllers/products.controller.js";

const router = Router();
//Todos los productos
router.get("/products", getProducts);
//Un solo producto
router.get("/products/:id", getProduct);
//Crear productos
router.post("/products", createProducts);
//Eliminar productos
router.delete("/products/:id", deleteProducts);
//Actualizar productos
router.patch("/products/:id", updateProducts);



export default router;
