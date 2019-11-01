function alphabeticalAddition(...letters){
  let resultAdd = 0,
      overflow;
  if (letters.length === 0) return 'z';
  while(letters.length) {
      let nextEstimated = letters.shift();
      resultAdd += nextEstimated.codePointAt(0) - 96;
    }
    if (resultAdd > 26) {
      overflow = resultAdd + 70;
    } else {
      overflow = resultAdd + 96;
    }
    return String.fromCodePoint(overflow);  
}

console.log(alphabeticalAddition('a','c','b,'|'));
console.log(alphabeticalAddition('a','b'));
console.log(alphabeticalAddition('y','c','b'));
console.log(alphabeticalAddition('z','a'));
console.log(alphabeticalAddition('z'));
console.log(alphabeticalAddition());


console.log(String.fromCodePoint(100));