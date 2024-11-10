function recursiveFactoriel(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactoriel(n - 1);
}

console.log(recursiveFactoriel(5));
