function PowerOfTwo(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2; //iuput size reduce by half --->Big O : O-log(n)====time complexity
  }
  return true;
}

console.log(PowerOfTwo(32)); //true

function isPowerTwo(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0; //o(n)
}
