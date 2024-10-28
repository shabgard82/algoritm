const Array = ["string", 12, false, "hello", 78];

const add = Array.push(234); //add new item to end of the array

const add2 = Array.unshift(0); //add new item to first of the array

const remove = Array.pop(); //remove from end
const remove2 = Array.shift(); //remove from first

for (const i of Array) {
  console.log(i); //map in item in array
}

//Array Big O
// remove from end     o(1)
// remove from first   o(n)
//access       o(1)
//search       o(n)
//push-pop     o(1)
//shift-unshift-concat-slice-splice    o(n)
//forEach-map-filter-reduce-           o(n)
