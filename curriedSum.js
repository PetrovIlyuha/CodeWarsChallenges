const infiniteCurry = (f) => {
  const curry = a => b => (b === undefined ? a : curry(f(a, b)));
  return curry;
};

const add = infiniteCurry((a, b) => a + b);
console.log(add(3)(7)(5)());