// ! FIXME:

function orderWeight(string) {
  let dataSet = string.split(' ').map(function(item) {
    return parseInt(item, 10).toString();
  });  
  let stringSortedDataSet = dataSet.sort((a,b) => a - b);
  let sumDigitsArray = [];
  for (let i = 0; i < stringSortedDataSet.length ; i++) {
    let summed = stringSortedDataSet[i]
      .split('')
      .map(Number)
      .reduce((a, b) => a + b);   
      sumDigitsArray.push(summed);      
    }
  function createArray(length) {
    var arr = new Array(length || 0),
        i = length;
    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }
    return arr;
  }  
  const holdingArray = createArray(sumDigitsArray.length,0);
  for (let i = 0; i < holdingArray.length; i++) {
   holdingArray[i].push(sumDigitsArray[i], stringSortedDataSet[i]);    
  }
  let sortedHoldingArray = holdingArray.sort((a,b) => a[0] - b[0]);    
  let resultingArray = [];
  for (let i = 0; i < sortedHoldingArray.length; i++) {
    resultingArray.push(sortedHoldingArray[i][1]);
  }
  for (let i = 1; i < resultingArray.length; i++) {
    for (let k = i-1; k < resultingArray.length - 1; k++)
    if ((resultingArray[i].toString().charCodeAt(0) < resultingArray[k].toString().charCodeAt(0)) && (sortedHoldingArray[i][0] === sortedHoldingArray[k][0])) {
      let temp = resultingArray[k];
      resultingArray[k] = resultingArray[i];
      resultingArray[i] = temp;
    }
  }
  return resultingArray.toString().split(',').join(' ');
}

console.log(orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'));