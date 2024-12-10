// old version

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.increase = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.decrease = function () {
  this.speed -= 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);
const benz = new Car("Benz", 125);

bmw.increase(); // BMW is going at 130 km/h
bmw.increase(); // BMW is going at 140 km/h
bmw.decrease(); // BMW is going at 130 km/h
bmw.increase(); // BMW is going at 140 km/h
bmw.increase(); // BMW is going at 150 km/h
benz.decrease(); // Benz is going at 115 km/h
benz.increase(); // Benz is going at 125 km/h

//E6 version
class Car1 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  increase() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  decrease() {
    this.speed -= 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  get speedUs() {
    return this.speed / 1.6;
  }
  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car1("ford", 120);
console.log(ford.speedUs); //75
ford.increase(); //ford is going at 130 km/h
ford.decrease(); //ford is going at 120 km/h
ford.increase(); //ford is going at 130 km/h
ford.speedUs = 100;
console.log(ford);
