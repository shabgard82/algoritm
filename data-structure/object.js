const obj = {
  name: "ali",
  age: 24,
  gender: true,
};

const Name = obj.name;
console.log(Name); //access value

const Age = obj.age;
console.log(Age);

const Gender = obj["gender"];
console.log(Gender);

obj.hooby = "footbal";
console.log(obj); //add item to obj

delete obj.hooby;
console.log(obj); //remove item from obj

const a = Object.entries(obj); // time complexity o(n)
console.log(a); //add key and values both in array key index0 and value index 1  every item in one array
// [
//   ["name", "ali"],
//   ["age", 24],
//   ["gender", true],
// ];

const b = Object.values(obj);
console.log(b); //show values all in array   ['ali', 24, true]  // time complexity o(n)

const c = Object.keys(obj); //show keys all in array  ['name', 'age', 'gender']   // time complexity o(n)
console.log(c);

// object time complexity
//add and remove o(1)
//access value   o(1)
//search in object is o(n) Object.entries & keys & values o(n)

for (const i in obj) {
  console.log(i); //map in object and show key
  console.log(obj[i]); //map in obj and show values
}
