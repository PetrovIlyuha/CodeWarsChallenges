function longestConsec(strarr, k) {
  let longestConcatKstrings = [];
  for (let i = 0; i <= strarr.length; i++) {
     let longestConcatKstrings[i] = [];
    for (let j = 0; j <= k; j++) {
         longestConcatKstrings[i].push(strarr[j]);   
    }
  }
  return longestConcatKstrings;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))