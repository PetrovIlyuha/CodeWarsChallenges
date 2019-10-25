function addLetters(...letters) {
  let resultAdd = 0,
    overflow;

  while (letters.length) {
    let nextEstimated = letters.shift();
    if ((nextEstimated.codePointAt(0) % 26) - 18 === 0) {
      resultAdd += 0;
    } else if (nextEstimated.codePointAt(0) % 26 <= 18) {
      resultAdd += (nextEstimated.codePointAt(0) % 26) + 8;
      if (resultAdd > 26) resultAdd -= 26;
    } else {
      resultAdd += (nextEstimated.codePointAt(0) % 26) - 18;
    }
  }
  if (resultAdd === 0) {
    resultAdd += 122;
  } else if (resultAdd > 26) {
    resultAdd += 70;
  } else {
    resultAdd += 96;
  }

  return String.fromCodePoint(resultAdd);
}

console.log(addLetters("p", "v", "a", "u", "d", "n"));
