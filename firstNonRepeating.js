function firstNonRepeated(s) {
  const chars = {}
  for (let char of s) {
      if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }  
  return Object.keys(chars).find(key => chars[key] === 1) ? Object.keys(chars).find(key => chars[key] === 1) : s[0];
}