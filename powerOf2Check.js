const powerOfTwoCheck = (n) => {
  let power = 1;
  
  while (power <= n) {
  	if (power * 2 === n) return true;
    power *= 2;
  }
  return false;
};


// Power of 2 Check
// Secret Code: C4ACE267
