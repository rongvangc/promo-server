import { Router } from "express";
import { createOrder } from "../controllers/order.controller";
import validatorBody from "../middlewares/validator";
import { createOrderSchema } from "../validations/order.schema";

export const router = Router();

router.route("/order").post(validatorBody(createOrderSchema), createOrder);
