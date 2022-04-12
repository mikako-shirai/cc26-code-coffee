const inverseObjectFilter = (obj, keyExclusionList) => {
  const output = {};

  for (const key in obj) {
    if (!keyExclusionList.includes(obj[key])) output[key] = obj[key];
  }
  return output;
};


// Inverse Object Filter
// Secret Code: E52F575B
