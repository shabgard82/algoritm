function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1; // اگر شاخص سمت چپ از شاخص سمت راست بزرگتر باشد، مقدار پیدا نشده است
  }

  let midIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === arr[midIndex]) {
    return midIndex; // اگر مقدار جستجو برابر با مقدار میانی باشد، شاخص را برمی‌گردانیم
  }

  if (target < arr[midIndex]) {
    // مقایسه صحیح مقدار target با arr[midIndex]
    // اگر مقدار جستجو کمتر از مقدار میانی باشد، در نیمه‌ی چپ جستجو می‌کنیم
    return search(arr, target, leftIndex, midIndex - 1);
  } else {
    // در غیر این صورت، در نیمه‌ی راست جستجو می‌کنیم
    return search(arr, target, midIndex + 1, rightIndex);
  }
}

// تست کد با ورودی‌های مختلف
console.log(recursiveBinarySearch([1, 3, 5, 7, 9], 5)); // خروجی: 2 (شاخص مقدار 5)
console.log(recursiveBinarySearch([1, 3, 5, 7, 9], 7)); // خروجی: 3 (شاخص مقدار 7)
console.log(recursiveBinarySearch([1, 3, 5, 7, 9], 8)); // خروجی: -1 (مقدار پیدا نشد)
//Big-O is O(logn)
