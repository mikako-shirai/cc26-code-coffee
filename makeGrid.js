/**
 * Creates an n by n grid (array of arrays) filled with a repeated value in each cell.
 * @param {number} n the side length of the grid
 * @param {Object} value A value to populate the grid with
 * @returns {Array<Array<Object>>} an n by n grid
 */
 const makeGrid = (n, value) => {
  const output = [];
  for (let i = 0; i < n; i++) {
    const inner = [];
    for (let j = 0; j < n; j++) {
      inner.push(value);
  	}
    output.push(inner);
  }
  return output;
};


// Secret Code: A4076B79
