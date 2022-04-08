const jpCharsetDetection = (str) => {
  for (const letter of str.split('')) {
    const codePoint = letter.codePointAt();
    if (
      (codePoint >= 0x3000 && codePoint <= 0x30ff) ||
      (codePoint >= 0xff00 && codePoint <= 0xffef) ||
      (codePoint >= 0x4e00 && codePoint <= 0x9faf)
    ) return true;
  }
  return false;
};


// Japanese Character Set Detection
// Secret Code: B5436660
