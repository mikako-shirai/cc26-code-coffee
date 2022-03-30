const rotateArray = (arr, direction, n) => {
  const output = [];
  
  let start = direction === "LEFT" ? n % arr.length : arr.length - n % arr.length;
  for (let i = start; i < start + arr.length; i++) {
    output.push(arr[i % arr.length]);
  }
  return output;
};


// Rotate Array
// Secret Code: EC8EC167
