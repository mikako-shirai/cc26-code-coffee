const rotateArray = (arr, direction, n) => {
  const output = [];
  const length = arr.length;
  const start = direction === "LEFT" ? n % length : length - n % length;

  for (let i = start; i < start + length; i++) {
    output.push(arr[i % length]);
  }
  return output;
};


// Rotate Array
// Secret Code: EC8EC167
