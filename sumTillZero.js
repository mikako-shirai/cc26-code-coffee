const tillZero = (nums) => {
  let sum = 0;

  for (const num of nums) {
    if (num === 0) break;
    sum += num;
  }
  return sum;
};


// Sum Till Zero
// Secret Code: 29678DE9
