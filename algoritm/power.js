function Power(number, pow) {
  if (number === 0) return 0;
  if (number === 1) return 1;
  for (let i = 2; i < number; i++) {
    return number * pow;
  }
  
}
