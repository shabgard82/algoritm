function recursiveFibonachi(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonachi(n - 1) + recursiveFibonachi(n - 2);
}

console.log(recursiveFibonachi(6));
//big o -->o(2^n)