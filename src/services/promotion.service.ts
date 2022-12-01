import { OrderItem, OrderItemDetail, Roles } from "../models/order";
import { Promotion } from "../models/promotion";
import { promotions } from "../utils/constants";

const applyPromotionRule = (
  role: Roles,
  orderItem: OrderItemDetail,
  promotion?: Promotion
) => {
  if (promotion?.role === role) {
    // Discount amountoff for Amazon
    if (
      !promotion?.applyRule &&
      orderItem.product.id === promotion.bonusProduct
    ) {
      const priceAfterDiscount = promotion.promotionValue;
      orderItem.total = +(
        (orderItem.product.price - priceAfterDiscount) *
        orderItem.quantity
      ).toFixed(2);
    }

    // Appy discount buy x get y for Facbook & Mirosoft
    if (
      promotion.applyRule &&
      promotion.applyRule === "buy-x-get-y" &&
      orderItem.product.id === promotion.bonusProduct &&
      promotion.applyValue &&
      orderItem.quantity >= promotion.applyValue
    ) {
      const repeatBuyPromo = Math.floor(
        orderItem.quantity / promotion.applyValue
      );
      const numberProductAfterPromo = promotion.promotionValue * repeatBuyPromo;
      orderItem.total = +(
        orderItem.product.price *
        (orderItem.quantity - numberProductAfterPromo)
      ).toFixed(2);
    }

    return orderItem;
  }

  return orderItem;
};

export const promotionService = ({
  role,
  orderItems,
}: {
  role: Roles;
  orderItems: OrderItemDetail[];
}) => {
  const selectedPromo = promotions.find((item) => item.role === role);
  const promotionOrderItems = orderItems?.map((item) =>
    applyPromotionRule(role, item, selectedPromo)
  );
  const total = promotionOrderItems
    .reduce((acc, item) => item.total + acc, 0)
    .toFixed(2);

  return {
    total,
    products: promotionOrderItems,
    promotion: selectedPromo?.name,
  };
};
