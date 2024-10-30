function getMinIndex(numbers) {
  if (!numbers.length) {
    throw new Error("It cannot be empty");
  }

  let minimumNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minimumNumber) {
      minimumNumber = numbers[i];
    }
  }
  return minimumNumber;
}

const testNumber = [3, 7, 1, 9, 6, 8];
const min = getMinIndex(testNumber);
console.log(min);
