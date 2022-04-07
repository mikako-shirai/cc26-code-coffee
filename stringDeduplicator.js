const stringDeduplicator = (arr) => {
  const seen = {};
  const output = [];

  for (const str of arr) {
    if (str in seen === false) {
      seen[str] = true;
      output.push(str);
    }
  }
  return output;
};


// String Deduplicator
// Secret Code: 0E5FCD79
