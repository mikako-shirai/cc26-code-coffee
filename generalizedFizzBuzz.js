const generalizedFizzBuzz = (n, f, b) => {
  const output = [];

  for (let i = 1; i <= n; i++) {
    let fizzbuzz = '';
    if (i % f === 0) fizzbuzz += 'Fizz';
    if (i % b === 0) fizzbuzz += 'Buzz';
    
    output.push(fizzbuzz ? fizzbuzz : i);
  }
  return output;
};


// Generalized Fizz Buzz
// Secret Code: A2475E56
