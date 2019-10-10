function nextSmaller(arr) {
    function perm(xs) {
      let ret = [];
    
      for (let i = 0; i < xs.length; i++) {
        let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));
    
        if(!rest.length) {
          ret.push([xs[i]])
        } else {
          for(let j = 0; j < rest.length; j++) {
            ret.push([xs[i]].concat(rest[j]))
          }
        }
      }
      return ret;
    }

    let initCompareVal = arr.toString();
    let digits = ("" + arr).split("");  
    let numsArray = perm(digits);
  
    let sortedArray = numsArray
      .map(x => (x.toString().split(',').join('')))
      .sort((a,b) => b - a)
      .filter(x => x <= initCompareVal)
      
      console.log(sortedArray)
    if (  initCompareVal[0] === '0' ||
        sortedArray.length === 1  ||
        sortedArray[1][0] === '0') {
      return -1; 
  } else {
    let nextSmallest = sortedArray.filter(n => n < sortedArray[0]);
    return nextSmallest[0];
  }
}

console.log(nextSmaller(414));