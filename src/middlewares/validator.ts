import { Request, Response, NextFunction } from "express";

// helpers
import AppError from "../utils/error";

// constants
import { HTTP_STATUS_CODE } from "../utils/constants";
import { ObjectSchema } from "joi";

const validatorBody =
  (schemaValidate: ObjectSchema) =>
  (req: Request, _: Response, next: NextFunction) => {
    const { error } = schemaValidate.validate(req.body);

    if (error)
      return next(
        new AppError(error.details[0].message, HTTP_STATUS_CODE.INVALID_INPUT)
      );

    return next();
  };

export default validatorBody;
