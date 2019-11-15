function decipherThis(str) {
  let transformedDigits = str
    .split(" ")
    .map(word => String.fromCodePoint(parseInt(word)));
  let letterParts = str
    .split(" ")
    .map(word =>
      word
        .split("")
        .filter(letter => letter.match(/\D/g))
        .join("")
    )
    .map(word =>
      word.length ? word.replace(/^(\w)(.*)(\w)$/, "$3$2$1") : word
    );
  let result = "";
  for (let i = 0; i < transformedDigits.length; i++) {
    result += transformedDigits[i] + letterParts[i] + " ";
  }
  return result.slice(0, -1);
}

console.log(
  decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o")
);
