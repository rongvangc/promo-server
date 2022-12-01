import { Product } from "./product";

export type OrderItem = {
  productId: string;
  quantity: number;
};

export type OrderItemDetail = {
  product: Product;
  quantity: number;
  total: number;
};

export const enum Roles {
  DEFAULT = "default",
  MICROSOFT = "microsoft",
  AMAZON = "amazon",
  FACEBOOK = "facebook",
}

export class Order {
  role: Roles;
  items: OrderItem[];

  constructor(role: Roles, items: OrderItem[]) {
    this.role = role;
    this.items = items;
  }
}
