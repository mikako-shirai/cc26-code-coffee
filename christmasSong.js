const christmasSong = () => {
  const output = [];
  const prefix = 'On the ';
  const middle = ' day of Christmas, my true love gave to me: ';
  const suffixAll = [];

  const makeSuffix = () => {
    let suffix = '';
    for (let i = suffixAll.length-1; i >= 0; i--) {
      if (i === suffixAll.length-1) {
        suffix += suffixAll[i];
      } else if (i === 0) {
        suffix += ', and ' + suffixAll[i];
      } else {
        suffix += ', ' + suffixAll[i];
      }
    }
    return suffix;
  };

  for (let i = 1; i <= 12; i++) {
    suffixAll.push(giftOptions[i][1]);
    const suffix = makeSuffix();
    const verse = prefix + giftOptions[i][0] + middle + suffix + '.';
    output.push(verse);
  }

  return output;
};


// Christmas Song
// Secret Code: B01425EA
