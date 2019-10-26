function abbreviate(string) {
  let arrayOfWords = string.replace("-", " ").split(' ');
  let abbreviatedWords = arrayOfWords.map(word => {
    return word.length > 3 ? word[0].concat(word.substring(1,word.length - 1).length).concat(word[word.length - 1]) : word;
  })
  return abbreviatedWords;
}

console.log(abbreviate('elephant rides are really fun'));