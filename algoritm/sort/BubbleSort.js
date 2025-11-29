function BubbleSort(arr) {
  for (i = 0; i < arr.length-1; i++) {
    for (j = 0; j < arr.length-1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}



console.log(BubbleSort([-4, 3, -1, 9, -30]));