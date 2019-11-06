function wave(string) {
  let waveArray = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " " || string[string.length] === " ") {
      continue;
    }
    waveArray.push(
      string
        .substr(0, i)
        .concat(string[i].toUpperCase())
        .concat(string.substr(i + 1))
    );
  }
  return waveArray;
}

console.log(wave("hello"));
console.log(wave("gap"));
