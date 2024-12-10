class Car {
  #age;
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }
  getAge() {
    return this.#age;
  }
}

const benz = new Car("benz", 30);

console.log(benz.name);
console.log(benz.getAge());
//console.log(benz.#age);         Property '#age' is not accessible outside class 'Car' because it has a private identifier
