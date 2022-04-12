const minMaxNumScraper = (strOfNums) => {
  let min;
  let max;
  let current = '';

  for (const letter of strOfNums) {
    if (letter === ' ') {
      if (+current < min || !min) min = +current;
      if (+current > max || !max) max = +current;
      current = '';
    } else {
      current += letter;
    }
  }

  if (+current < min || !min) min = +current;
  if (+current > max || !max) max = +current;

  return [min, max];
};


// Min/Max Number Scraper
// Secret Code: FD598D0C
