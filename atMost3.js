const atMostThree = (str) => {
  let output = '';
  const seen = {};

  for (const letter of str) {
    if (seen[letter] === 3) continue;
    seen[letter] = seen[letter] + 1 || 1;
    output += letter;
  }
  return output;
};


// At most, 3
// Secret Code: 818C8264
