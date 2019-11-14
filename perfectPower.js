var isPP = function(n) {
  let perfPowers = [];
  for (let i = 1; i < 110; i += 1) {    
    for (let j = 2; j < 110; j += 1) {      
      if (i ** j === n) perfPowers.push([i,j]);      
    } else { return null}
  }
  return perfPowers;
};

console.log(isPP(81));
