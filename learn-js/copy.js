const person = {
  name: "mehrshad",
  age: 25,
  address: {
    city: "New York", //original object
    country: "usa",
  },
  gender: "male",
};

const shallowCopy = Object.assign({}, person); //shallow copy and will change city in person and shallowCopy

const deepCopy = JSON.parse(JSON.stringify(person)); //deep copy show city new york because it create new object with new memory

shallowCopy.address.city = "Los Angeles"; //change city and will appear in person and shallow
shallowCopy.address.country = "kabol"; //change city and will appear in person and shallow

console.log("original object", person);

console.log("shallow object", shallowCopy);

console.log("deep object", deepCopy);
