import { Request, Response } from "express";
import { createOrderService } from "../services/order.service";
import { promotionService } from "../services/promotion.service";
import { ApiHandle } from "../utils/baseError";
import { HTTP_STATUS_CODE } from "../utils/constants";

export const createOrder = async (req: Request, res: Response) => {
  const orderItems = await createOrderService(req.body);
  const promotionOrderItem = promotionService({
    role: req.body.role,
    orderItems: orderItems.products,
  });

  res.status(HTTP_STATUS_CODE.OK).json(ApiHandle({ data: promotionOrderItem }));
};
