function fibo(n, memo=[]) {
  if (memo[n] !== undefined) return memo[n]
  if (n === 0) return 0;
  if (n <=2) return 1;
    let result = fibo(n-1, memo) + fibo(n-2, memo);
    memo[n] = result;
  return result;
};

console.log(fibo(10)); // 55