const fourFuncMathCalc = (a, b, op) => {
  const operation = {
    "ADD": (x, y) => x + y,
    "SUBTRACT": (x, y) => x - y,
    "MULTIPLY": (x, y) => x * y,
    "DIVIDE": (x, y) => x / y,
  };

  return operation[op](a, b);
};


// Four Function Math Calc
// Secret Code: 3C732093
