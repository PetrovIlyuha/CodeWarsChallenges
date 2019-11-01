function firstNonRepeated(s) {
  const chars = {}
  for (let char of s) {
      if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }  
  if (Object.values(chars).every(x => x > 1)) { 
      return null
    } else if (Object.keys(chars).find(key => chars[key] === 1)) {
      return Object.keys(chars).find(key => chars[key] === 1)
    } else {
      return s[0];
    }
}


console.log(firstNonRepeated([2,1,3,2,1,2,4,3]));
