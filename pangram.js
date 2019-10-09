function isPangram(string) {
  let parsedString = string.toLowerCase().split('');
  let letterSet = Array.from(new Set(parsedString));
  let sortedAndFilteredLetterSet = letterSet.sort().filter(letter => letter.codePointAt(letter) >= 97 && letter.codePointAt(letter) <=122);
  let testPangramLetterArray = [ 'a', 
  'b', 
  'c', 
  'd', 
  'e', 
  'f', 
  'g', 
  'h', 
  'i', 
  'j', 
  'k', 
  'l', 
  'm', 
  'n', 
  'o', 
  'p', 
  'q', 
  'r', 
  's', 
  't', 
  'u', 
  'v', 
  'w', 
  'x', 
  'y', 
  'z' ];
  if (JSON.stringify(sortedAndFilteredLetterSet) === JSON.stringify(testPangramLetterArray)) {
    return true;
  } else { 
    return false
  }
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))

// * unicode 97 -122 english lowercase chars