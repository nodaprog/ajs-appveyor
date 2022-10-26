// eslint-disable-next-line import/prefer-default-export
export function calculateTotal(purchases, applyDiscount) {
  // eslint-disable-next-line no-return-assign, no-param-reassign
  const sum = purchases.reduce((total, item) => total += item.count * item.price, 0);

  if (applyDiscount) {
    return sum * 0.5;
  }

  return sum;
}
