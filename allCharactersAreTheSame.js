const allCharactersSame = (str) => {
  const letters = str.split('');
  const initial = letters[0];

  for (const letter of letters) {
    if (letter !== initial) return false;
  }
  return true;
};


// All Characters are the Same
// Secret Code: 79879012
