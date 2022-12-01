import { Router } from "express";
import { getProducts } from "../controllers/product.controller";

export const router = Router();

router.route("/products").get(getProducts);
