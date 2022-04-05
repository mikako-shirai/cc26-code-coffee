const makeWithinRange = (a, b) => {
  const output = [];
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  for (let i = min; i <= max; i++) {
    output.push(i);
  }
  return output;
};


// Make Within Range
// Secret Code: D75F3FC5
