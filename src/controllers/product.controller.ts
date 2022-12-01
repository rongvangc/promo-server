import { Request, Response } from "express";
import { getProductsService } from "../services/product.service";
import { ApiHandle } from "../utils/baseError";
import { HTTP_STATUS_CODE } from "../utils/constants";

export const getProducts = (req: Request, res: Response) => {
  const products = getProductsService();

  res.status(HTTP_STATUS_CODE.OK).json(ApiHandle({ data: products }));
};
