import { Router } from "express";
import { router as productRouter } from "./product.route";
import { router as orderRouter } from "./order.route";

export const router = Router();

router.use(productRouter);
router.use(orderRouter);
