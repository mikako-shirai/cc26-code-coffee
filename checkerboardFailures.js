const checkerboardFailures = (grid) => {
  if (!grid[0][0]) return grid.length * grid.length;

  let count = 0;
  let binary = false;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (Boolean(grid[i][j]) === binary) count += 1;
      binary = !binary;
    }
    if (grid.length % 2 === 0) binary = !binary;
  }
  return count;
};


// Checkerboard Failures
// Secret Code: 9A1E895B
