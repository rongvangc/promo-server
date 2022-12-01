import { Roles } from "./order";

export class Promotion {
  role: Roles;
  name: string;
  promotionType: "amountOff" | "bonus";
  promotionValue: number;
  bonusProduct: string;
  applyProduct?: string;
  applyRule?: "buy-x-get-y";
  applyValue?: number;

  constructor(
    role: Roles,
    name: string,
    promotionType: "amountOff" | "bonus",
    promotionValue: number,
    bonusProduct: string, //(amount or number product)
    applyProduct?: string, //(productId will apply)
    applyRule?: "buy-x-get-y",
    applyValue?: number
  ) {
    this.role = role;
    this.name = name;
    this.promotionType = promotionType;
    this.promotionValue = promotionValue;
    this.bonusProduct = bonusProduct;
    this.applyProduct = applyProduct;
    this.applyRule = applyRule;
    this.applyValue = applyValue;
  }
}
