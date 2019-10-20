function vaporCode(str) {
  let splitted = str.toUpperCase()
                    .split(' ').filter(letter => letter !== ' ')
                    .join(' ')
  return splitted;
}


console.log(vaporCode("What's up, man?"));