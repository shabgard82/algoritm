function startTimer() {
  let counter = 0;
  setInterval(function () {
    counter++;
    console.log(counter);
  }, 1000);
}

startTimer();



// با استفاده از کلاژر ها یک فانکشنی نوشته شده که فقط یکبار کال شده ولی فانکشن درونی هنوز به متغیر تعریف شده در فانکشن لایه بیرونی دسترسی دارد و هر یک ثانیه این دستور چاپ میشود
