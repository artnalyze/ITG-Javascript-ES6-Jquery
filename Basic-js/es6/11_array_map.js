// Array Map
const array_a = [1, 2, 3];
// ---- [2,4,6];

const result = [];
// for (let i = 0; i < array_a.length; i++) {
//   const a = array_a[i] * 2;
//   result.push(a);
// }
array_a.forEach((e) => {
  const a = e * 2;
  result.push(e);
});

// side effect
console.log(result);

console.log("---------------------");
// Array map
const result_map = array_a.map((e) => e * 2);
console.log(result_map);

const multiplyByTwo = (result) => result * 2;
const multiplyByTen = (result) => result * 10;
const result_map1 = array_a.map(multiplyByTwo).map(multiplyByTen);
console.log(result_map1);

console.log("---------------------");
const pets = [{ name: "Bebo" }, { name: "Mano" }];

const result_pet = pets.map((e) => e.name);
console.log(result_pet);

console.log("---------------------");
const fruitsss = ["banana", "apple", "mango"];
const result_f = fruitsss.map((e, i, d) => {
  return `Day ${++i} eat ${e} ของเดิม ${d}`;
});

console.log(result_f);
