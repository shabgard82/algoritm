const obj = {
  name: "erfan",
  age: 25,
  greet: function () {
    console.log(this.name); // this value is erfan because it is normal function
  },
  calculateAge: () => {
    console.log(this.age); // this value is undefind because it is () => {}
  },
};

obj.calculateAge();
obj.greet();

// ##################################################################################################

const obj2 = {
  name: "ali",
  age: 89,
  calculateName: function () {
    const arrow = () => {
      console.log("this is obj2 name", this.name);
    };
    return arrow();
  },
  calculateAge: function () {
    const arrow2 = () => {
      console.log("this is obj2 age", this.age);
    };
    return arrow2();
  },
};

obj2.calculateAge();
obj2.calculateName();

// ###################################################################################################

const obj3 = {
  name: "elham",
  greet: function (age, city) {
    console.log(
      `hello my name is ${this.name} and i am ${age} years old and i live in ${city}`
    );
  },
};

const anotherName = { name: "ali" };
const anotherName2 = { name: "mane" };

obj3.greet.call(anotherName, 34, "london"); // use call() method to change this and send another arguments    a.call(this,arg1,arg2,...)
obj3.greet.apply(anotherName, [25, "manchester"]); //use apply() method to change this and send another arguments in array    a.apply(this,[arg1,arg2,...])
const bindMethod = obj3.greet.bind(anotherName2, 85, "New Yourk"); //use bind() method to change this  and send arg like call() but it has diffrent between and is not call fn
bindMethod();

// فراخوانی نمیشه تابع بلافاصله در بایند و تا زمانی که فانکشن رو براش کال نکنی فراخوانی نداریم برعکس دوتا متد call() و bind()
