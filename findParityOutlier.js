function findOutlier(integers){
  let even = integers.filter(e => e % 2 === 0);
  let odd = integers.filter(e => e % 2 !== 0);
  return even.length < odd.length ? even[0] : odd[0]; 
}