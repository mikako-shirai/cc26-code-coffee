const saveKeysThatAreValues = (obj) => {
  const output = {};
  const vals = Object.values(obj);

  for (const key in obj) {
    if (vals.includes(key)) output[key] = obj[key];
  }
  return output;
};


// Save Keys That Are Values
// Secret Code: 400C2233
