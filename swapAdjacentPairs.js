const swapAdjacentPairs = (arr) => {
  const swapped = [];

  for (let i = 0; i < arr.length; i += 2) {
    swapped[i] = arr[i+1];
    swapped[i+1] = arr[i];
  }
  return swapped;
};


// Swap Adjacent Pairs
// Secret Code: BD831411
