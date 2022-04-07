const wordCounter = (str) => {
  let count = 0;
  let inWord = false;

  for (const letter of str.split('')) {
    const separator = letter.match(/[^A-Za-z0-9'"]+/);
    
    if (separator && inWord) {
      count += 1;
      inWord = false;
    } else if (!separator && !inWord) {
      inWord = true;
    }
  }

  if (inWord) count += 1;
  return count;
};


// Word Counter
// Secret Code: 73B94747
