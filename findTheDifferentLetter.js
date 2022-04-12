const findTheDifferentLetter = (str1, str2) => {
  const seen = {};

  for (const letter of str1 + str2) seen[letter] = !seen[letter];

  for (const [key, value] of Object.entries(seen)) {
    if (value) return key;
  }
};


// Find the Different Letter
// Secret Code: D1E97FFE
