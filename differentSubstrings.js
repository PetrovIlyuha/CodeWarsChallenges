function differentSubstringsTrie(inputString) {
  let iterableInput = inputString.split('');
  let substringsArray = [];
  for (let i = 0; i <= iterableInput.length; i++) {
      for (let j = i + 1; j <= iterableInput.length; j++) {
          substringsArray.push(inputString.slice(i,j));
      }
  }
  let uniqueSet = new Set(substringsArray);
  let unique = [...uniqueSet];
  return unique;
}


