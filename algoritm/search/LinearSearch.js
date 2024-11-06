function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

console.log(linearSearch([1, 5, 3, 4, 7, 8, 77, 90], 77)); //6
console.log(linearSearch([1, 5, 3, 4, 7, 8, 77, 90], 3)); //2

//big o --> O(n)
//برای پیدا کردن یک عنصر در ارایه غیرمرتب یا نامرتب از لینیر سرچ استفاده میشود و برای پیداکردن یک عنصر در ارایه مرتب از باینری سرچ استفاده می شود
