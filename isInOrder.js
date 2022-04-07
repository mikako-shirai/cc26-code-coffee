const isInOrderPosNeg = (nums) => {
  let lastSeenPositive = 0;
  let lastSeenNegative = 0;

  for (const num of nums) {
    if (num > 0) {
      if (num <= lastSeenPositive) return false;
      lastSeenPositive = num;
    } else {
      if (num >= lastSeenNegative) return false;
      lastSeenNegative = num;
    }
  }
  return true;
};


// Is in Order? (Positive and Negative)
// Secret Code: D221FE7F
