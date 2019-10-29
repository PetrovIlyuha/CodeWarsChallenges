function findEvenIndex(arr) {
  let left = [],
    right = [];
  for (let i = 0; i < arr.length; i++) {
    left.push(arr.slice(0, i).reduce((sum, i) => sum + i, 0));
    right.push(arr.slice(i + 1, arr.length).reduce((sum, i) => sum + i, 0));
  }
  for (let i = 0; i < left.length; i++) {
    if (left[i] === right[i]) {
      return right.indexOf(right[i]);
    }
  }
  return -1;
}
