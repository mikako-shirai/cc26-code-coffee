const stringByFirstChar = (strings) => {
  const output = {};

  for (const str of strings) {
    if (str.charAt(0) in output) {
      output[str.charAt(0)].push(str);
    } else {
      output[str.charAt(0)] = [str];
    }
  }
  return output;
};


// Strings by First Character
// Secret Code: 37887A6D
