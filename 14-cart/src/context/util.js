export function getCartTotals(cart) {
  let totalCost = 0;
  let totalAmount = 0;
  for (const cartItem of cart.values()) {
    totalAmount += cartItem.amount;
    totalCost += cartItem.amount * cartItem.price;
  }
  return {
    totalAmount,
    totalCost,
  };
}
