const map = new Map([
  ["c", 12],
  ["n", 34],
]);

console.log(map); // نتیجه {'c' => 12, 'n' => 34}

const add = map.set("b", 76);
console.log(add); //{'c' => 12, 'n' => 34, 'b' => 76}

console.log(map.delete("b"));
console.log(map); //{'c' => 12, 'n' => 34}  after delete

console.log(map.has("c")); //true

for (const [key, value] of map) {
  console.log(`${key}:${value}`); //c:12 n:34
}

const clearAll = map.clear();
console.log(clearAll); //همه چیو پاک میکنه
