console.log("start Testing...");
setTimeout(() => console.log("this is timer with ..."), 0);
Promise.resolve("Resolved promise 1").then((res) => console.log(res));
Promise.resolve("resolved promise 2").then((res) => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});
console.log("End of Testing");
// اول لاگ هایی که همزمان هستند  اجرا میشوند یعنی در کنسول شما اول استارت تست و دوم اند تست رو میبینید  ست تایم اوت غیرهمزمان هست با پرامیس ها و اولیت با پرامیس ها هستش چون پرامیس ها در داخل ماکرو تسک ها قرار دارند و برای ورود به کال استک در اولویت بالاتنری نسبت به بقیه فرایند های غیر همزمان دارند و اول  اونی که نوشته شده اجرا و بعد دومین پپرامیس و بعدش میریم سراغ ست تایم اون
// start Testing...
// eventLoop.js:8 End of Testing
// eventLoop.js:3 Resolved promise 1
// eventLoop.js:6 resolved promise 2
// eventLoop.js:2 this is timer with ...

