function longestConsec(strarr, k) {
  let longestConcatKstrings = Array(strarr.length - 1).fill('')   
  for (let i = 0; i <= strarr.length - k; i++) {
    for (let j = i; j < k + i; j++) {
        longestConcatKstrings[i] += strarr[j]
      }     
    }      
    let longest;
    if ( k > 1) {
      for (let i = 0; i <= longestConcatKstrings.length - 2; i++) {
        if (longestConcatKstrings[i].length < longestConcatKstrings[i+1].length) {
          longest = longestConcatKstrings[i+1];
         }
       }
    } else {
     longest = strarr.sort((a,b) => b.length - a.length)[0];
    }
   return longest;
 }


//  function longestConsec(strarr, k) {
//   let longestConcatKstrings = Array(strarr.length - 1).fill('')   
//    for (let i = 0; i <= strarr.length - k; i++) {
//      for (let j = i; j < k + i; j++) {
//          longestConcatKstrings[i] += strarr[j]
//        }     
//      }      
//      let longest;     
//      if (k > 1) {
//        longest = longestConcatKstrings.sort((a,b) =>  b.length - a.length)[0];
//      } else {
//        longest = strarr.sort((a,b) => b.length - a.length)[0];
//      }
//      return longest;
//  }

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1))