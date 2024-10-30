//یک تابع بنویسید که یک رشته رو بگیره و اون کلمه ای که بیشتر از همه تکرار شده رو برگردونه

function most(string) {
  const words = string.split(""); //تبدیل استرینگ به ارایه ای از رشته ها
  const wordCount = {};
  let maxCount = 0; //بیشترین تعداد
  let mostRepeated = ""; //بیش ترین حرف
  for (const item of words) {
    wordCount[item] = (wordCount[item] || 0) + 1;
    if (wordCount[item] > maxCount) {
      maxCount = wordCount[item];
      mostRepeated = item;
    }
  }
  return mostRepeated;
}

const res = most("helllllllllllllllllllllllllllllloworffffffffffffffff");
console.log(res);
