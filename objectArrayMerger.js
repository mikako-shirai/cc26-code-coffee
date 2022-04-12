const objectArrayMerger = (arrayOfObjects) => {
  const mergedObj = {};

  for (const obj of arrayOfObjects) {
    for (const key in obj) {
      if (mergedObj[key]) {
        mergedObj[key].push(obj[key]);
      } else {
        mergedObj[key] = [obj[key]];
      }
    }
  }
  return mergedObj;
};


// Object Array Merger
// Secret Code: 75CB1C09
