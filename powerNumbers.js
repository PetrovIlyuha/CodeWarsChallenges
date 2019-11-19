function playingWithDigits(n, p) {
  let digitsCompose = n
    .toString()
    .split("")
    .map(num => Number(num));
  let powersExpression = 0;
  for (let i = 0; i < digitsCompose.length; i++, p++) {
    powersExpression += digitsCompose[i] ** p;
  }
  if (Number.isInteger(powersExpression / n)) {
    return powersExpression / n;
  } else {
    return -1;
  }
}

console.log(playingWithDigits(46288, 3));
