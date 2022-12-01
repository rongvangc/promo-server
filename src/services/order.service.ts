import { OrderItem, OrderItemDetail, Roles } from "../models/order";
import { products } from "../utils/constants";

export const createOrderService = async ({
  items,
}: {
  role: Roles;
  items: OrderItem[];
}) => {
  const orderItemFilter = items?.map((item) => {
    const itemOrder = products.find((prd) => prd.id === item.productId);
    const total = itemOrder ? item.quantity * +itemOrder.price : 0;

    return {
      product: itemOrder!,
      total,
      quantity: item.quantity,
    };
  });

  const total = orderItemFilter
    .reduce((acc, item) => item.total + acc, 0)
    .toFixed(2);

  return {
    products: orderItemFilter,
    total,
  };
};
