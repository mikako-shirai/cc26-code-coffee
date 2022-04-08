const findTheDifferentLetter = (str1, str2) => {
  const seen = {};
  const strAll = (str1 + str2).split('');

  for (let i = 0; i < strAll.length; i ++) {
    const letter = strAll[i];
    seen[letter] = seen[letter] ? false : true;
  }

  for (const [key, value] of Object.entries(seen)) {
    if (value) return key;
  }
};


// Find the Different Letter
// Secret Code: D1E97FFE
