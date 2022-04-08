const oxfordCommaBuilder = (arr, includeOxfordComma) => {
  if (arr.length === 2) return arr.join(' and ');

  const last = arr.pop();
  let string = arr.join(', ');

  string += (includeOxfordComma ? ', and ' : ' and ') + last;
  return string;
};


// Oxford Comma Builder
// Secret Code: 24D8C71A
