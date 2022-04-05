const evenOddSplitter = (arr) => {
  const evens = [];
  const odds = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evens.push(arr[i]);
    } else {
      odds.push(arr[i]);
    }
  }
  return [evens, odds];
};


// Even/Odd Splitter
// Secret Code: D3BB230B
