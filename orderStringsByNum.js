function order(word) {
  const wordsArray = word.split(" ");
  let wordOrderMap = new Map();
  const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  wordsArray.map(word => {
    for (let i = 0; i < word.length; i++) {
      if (digits.includes(word[i])) {
        wordOrderMap.set(word[i], word);
      }
    }
  });
  let mapAsc = new Map([...wordOrderMap.entries()].sort());
  let finalString = [...mapAsc.values()].join(" ");
  return finalString;
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
