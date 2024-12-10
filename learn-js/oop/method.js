//instance method
//instance method یعنی بتونیم از متد هایی که در کلاس والد استفاده کردیم در کلاس های فرزند هم استفاده کنیم مثل این جا که برای دانش اموز دوم هم از نام و. سن استفاده کردیم
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const student2 = new Student();
console.log(student2.name);
console.log(student2.age);

//static Method
//static method is now add function that can use just into Sum class because it is static method
class Sum {
  static add(a, b) {
    return a + b;
  }

  constructor(age, height) {
    this.age = age;
    this.height = height;
  }
}

console.log(Sum.add(2, 3)); //5
const sum2 = new Sum(24, 156);
console.log(sum2.age); //24
console.log(sum2.height); //156
console.log(sum2.add); //undefined
