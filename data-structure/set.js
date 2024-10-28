const set = new Set([1, 2, 3, 45, 6, 78, 90, 0, 0, 0]); //مقادیر تکراری نمیگیره برخلاف ارایه ها
console.log(set);

const check = set.has(2);
console.log(check); //چک میکنه همچین مقداری داخل ست ها وجود داره یا نه

const add = set.add("helooooooo");
const add2 = set.add(23); //اضافه کردن یک مقدار به ست ها
const size = set.size; //تعداد ایتم های موجود در داخل ست ها
console.log(size);
const remove = set.delete("helooooooo"); //حذف تک ایتم از درون ست ها
const clear = set.clear(); //پاک کردن کل مقادیر ست ها

for (const item of set) {
  console.log(item); //پیمایش داخل ست ها و نمایش ان ها
}
