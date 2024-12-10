class Animal {
  #family;
  constructor(name, region, age) {
    this.name = name;
    this.region = region;
    this.age = age;
    this.#family = name;
  }
  families() {
    console.log(`This is a ${this.#family} dog that is very dangerous!!!`);
  }
  calcAge() {
    return 2037 - this.age;
  }
}

class Dogs extends Animal {
  constructor(name, region, age, height) {
    super(name, age, region);
    this.height = height;
  }
  showFamily() {
    super.families();
  }
}

const dog = new Dogs("zoghali", 1000, "asia", 123);
console.log(dog.calcAge()); //1037
console.log(dog.height); //123
console.log(dog.name); //zoghali
console.log(dog.region); //asia
console.log(dog.age); //1000
console.log(dog.showFamily()); //This is a husky dog that is very dangerous!!!
// console.log(dog.#family);  it is private method and just use for parent class that family inside it

//use super method to access to parent class methods

//اگر بخواهیم مقادیر داخل کانستراکتور رو صدا بزنیم به وسیله متد سوپر اینجوریه             super(name, age, region)
//اگر بخواهیم مقادیر متد های بیرون کانستراکتور رو صدا بزنیم به وسیله متد سوپر اینجوریه    super.families();





// 1. فراخوانی سازنده کلاس والد
// در کلاس‌های فرزند، سازنده باید ابتدا سازنده کلاس والد را با استفاده از سوپر فراخوانی کند قبل از اینکه به this  دسترسی داشته باشد.

class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // فراخوانی سازنده کلاس والد
    this.age = age;
  }
}

const child = new Child("Ali", 10);
console.log(child.name); // Ali
console.log(child.age); // 10



// 2. فراخوانی متدهای کلاس والد
// اگر کلاسی متدی را بازنویسی (override) کرده باشد، می‌توان از super برای فراخوانی متد کلاس والد استفاده کرد.
class Parent1 {
  greet() {
    return "Hello from Parent!";
  }
}

class Child1 extends Parent {
  greet() {
    return `${super.greet()} And Hello from Child!`;
  }
}

const child1 = new Child();
console.log(child.greet());
// // خروجی: Hello from Parent! And Hello from Child!




// دسترسی به متدهای static کلاس والد:
// با استفاده از super می‌توان متدهای استاتیک کلاس والد را از کلاس فرزند فراخوانی کرد.
// فقط در متدهای static قابل استفاده است:
// از super برای دسترسی به متدهای static باید حتماً در متدهای static کلاس فرزند استفاده کنید. در غیر این صورت، خطا رخ می‌دهد.
// عدم دسترسی به متدهای غیرstatic:
// با super نمی‌توان به متدهای غیرstatic کلاس والد از داخل متدهای static دسترسی داشت.
class Parent {
  static greet() {
    return "Hello from static Parent!";
  }
}

class Child extends Parent {
  static greet() {
    return `${super.greet()} And Hello from static Child!`;
  }
}

console.log(Child.greet());
// خروجی: Hello from static Parent! And Hello from static Child!



// عدم دسترسی به متغیرهای غیرعمومی (Private):
// از super نمی‌توان برای دسترسی به اعضای خصوصی کلاس والد استفاده کرد. فقط اعضای عمومی یا محافظت‌شده (protected) در دسترس هستند.