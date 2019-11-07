function array_diff(a, b) {
  return a.filter(elemA => !b.includes(elemA));
}

console.log(array_diff([3, 4, 1, 1, 2], [3, 1]));
