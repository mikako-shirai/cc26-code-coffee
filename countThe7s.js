const countSevens = (n) => {
  let count = 0;
  
  for (let i = 1; i <= n; i++) {
    const letters = String(i).split('');
    for (let letter of letters) {
      if (letter === '7') count += 1;
    }
  }
  return count;
};


// Count the 7's
// Secret Code: BAF29524
