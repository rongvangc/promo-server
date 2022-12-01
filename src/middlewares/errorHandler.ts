import { Request, Response, NextFunction } from "express";
import { ApiHandle } from "../utils/baseError";
import { HTTP_STATUS_CODE } from "../utils/constants";
import { AppErrorInterface } from "../utils/error";

export const errorHandler = (
  err: AppErrorInterface,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { statusCode = HTTP_STATUS_CODE.BAD_REQUEST, message } = err;
  res.status(statusCode).json(ApiHandle({ message }));
};
