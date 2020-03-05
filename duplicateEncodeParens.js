function duplicateEncode(word) {
  let preparedWord = word.toLowerCase();
  const chars = {};
  let resultString = "";
  for (let char of preparedWord) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }
  for (const letter of preparedWord) {
    if (chars[letter] > 1) {
      resultString += ")";
    } else {
      resultString += "(";
    }
  }

  return resultString;
}

console.log(duplicateEncode("recede"));
