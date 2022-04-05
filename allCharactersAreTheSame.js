const allCharactersSame = (str) => {
  let same = true;
  const letters = str.split('');
  const initial = letters[0];
  
  for (const letter of letters) {
  	if (letter !== initial) {
      same = false;
      break;
    }
  }
  return same;
};


// All Characters are the Same
// Secret Code: 79879012
