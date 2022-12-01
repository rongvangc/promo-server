import { Roles } from "../models/order";
import { Product } from "../models/product";
import { Promotion } from "../models/promotion";

export const products = [
  new Product("1", "Small Pizza", 11.99, "10 pizza for one person"),
  new Product("2", "Medium Pizza", 15.99, "12 pizza for two person"),
  new Product("3", "Large Pizza", 21.99, "15 pizza for four person"),
];

export const promotions = [
  new Promotion(
    Roles.MICROSOFT,
    "Gets a 3 for 2 deal for Small Pizzas",
    "bonus",
    1,
    "1",
    "1",
    "buy-x-get-y",
    3
  ),
  new Promotion(
    Roles.AMAZON,
    "Gets a discount on Large Pizza where the price drops to $19.99",
    "amountOff",
    2,
    "3"
  ),
  new Promotion(
    Roles.FACEBOOK,
    "Gets a 5 for 4 deal for Medium Pizzas",
    "bonus",
    1,
    "2",
    "2",
    "buy-x-get-y",
    5
  ),
];

// Status code
export enum HTTP_STATUS_CODE {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INVALID_INPUT = 422,
  INTERNAL_SERVER = 500,
}
