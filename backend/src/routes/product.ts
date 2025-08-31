import { Router } from "express";
import {
  deleteProduct,
  getProducts,
  registerProduct,
  updateProduct,
} from "../controllers/product.js";
import validaterToken from "./validateToken.js";

const router = Router();

router.post("/api/product/register", registerProduct);
router.get("/api/product/getProducts", validaterToken, getProducts);
router.delete("/api/product/deleteProduct/:id", validaterToken, deleteProduct);
router.put("/api/product/updateProduct/:id", validaterToken, updateProduct);

export default router;
