const reverseClumps = (arr, n) => {
  const output = [];
  const start = arr.length -1 + n;

  for (let i = start; i >= n; i--) {
    output.push(arr[i % arr.length]);
  }
  return output;
};


// Reverse Clumps
// Secret Code: 0D3A44BE
