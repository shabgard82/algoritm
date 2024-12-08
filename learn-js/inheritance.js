class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} make some sounds...`);
  }
}

class Dogs extends Animal {
  speak() {
    console.log(`${this.name} barks.:)`);
  }
}

const myDogs = new Dogs("miwwww");
myDogs.speak();
