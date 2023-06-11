const discount = 0.02;

const addCoupon = (priceTotal) => {
  return priceTotal - discount * priceTotal;
};

console.log(addCoupon(10));
