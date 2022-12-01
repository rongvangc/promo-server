import Joi from "joi";
import { Roles } from "../models/order";

export const createOrderSchema = Joi.object({
  role: Joi.valid(Roles.AMAZON, Roles.DEFAULT, Roles.FACEBOOK, Roles.MICROSOFT),
  items: Joi.array()
    .items({
      productId: Joi.string().required(),
      quantity: Joi.number().required(),
    })
    .required(),
});
