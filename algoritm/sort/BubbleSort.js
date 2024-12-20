// تابع bubbleSort آرایه‌ای را به عنوان ورودی می‌گیرد و آن را مرتب می‌کند
function bubbleSort(arr) {
  // حلقه do-while را اجرا می‌کنیم، که حداقل یک بار اجرا می‌شود
  do {
    swap = false; // فرض می‌کنیم که در این دور جابه‌جایی رخ نمی‌دهد

    // حلقه for برای پیمایش عناصر آرایه
    for (let i = 0; i < arr.length; i++) {
      // بررسی می‌کنیم که آیا عنصر فعلی بزرگتر از عنصر بعدی است یا خیر
      if (arr[i] > arr[i + 1]) {
        // اگر بزرگتر بود، دو عنصر را جابه‌جا می‌کنیم
        let temp = arr[i]; // عنصر فعلی را در متغیر temp ذخیره می‌کنیم
        arr[i] = arr[i + 1]; // عنصر بعدی را به مکان عنصر فعلی انتقال می‌دهیم
        arr[i + 1] = temp; // مقدار temp را به مکان عنصر بعدی انتقال می‌دهیم
        swap = true; // علامت می‌زنیم که جابه‌جایی رخ داده است
      }
    }
    // حلقه را تا زمانی اجرا می‌کنیم که جابه‌جایی رخ داده باشد
  } while (swap);

  // آرایه مرتب شده را برمی‌گردانیم
  return arr;
}

// نمونه‌ای از آرایه برای آزمایش و چاپ نتیجه در کنسول
console.log(bubbleSort([-4, 3, -1, 9, -30]));

//     در هر مرحله، از ابتدای آرایه تا انتهای آن حرکت می‌کنیم و دو عنصر مجاور را مقایسه می‌کنیم.
//     اگر عنصر اول بزرگتر از عنصر دوم باشد، آن‌ها را جابه‌جا می‌کنیم.
//     این فرآیند را تا زمانی ادامه می‌دهیم که هیچ جابه‌جایی در دور جدید رخ ندهد، که به معنی مرتب شدن کامل آرایه است.
//دارای دو حلقه تو در تو هستش پیچیدیگی اون  Big-O = o(n^2)
