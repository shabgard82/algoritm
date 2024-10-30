function Factoriel(num) {
  let res = 1;
  for (let i = 2; i <= num; i++) {
    res = res * i;
  }
  return res;
}

console.log(Factoriel(5));

//Big O is O(n)
