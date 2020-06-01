/*
 * Basic Array
 */
// Array Join
const numbers = [10, 20, 30, 40];
console.log(numbers.join());
console.log(numbers.join(","));
console.log(numbers.join("-"));
console.log(numbers.join("+"));
console.log(numbers.join(" "));

// Summary
let result = 0;
for (let index = 0; index < numbers.length; index++) {
  result += numbers[index];
}
console.log(result);

// Array Reduce
const result1 = numbers.reduce((sum, num) => {
  return sum + num;
}, 0); // 0 >> ค่าเริ่มต้น
console.log(result1);

// Array Concat
const myarr1 = [5, 6, 7];
const myarr2 = [8, 9, 10];

const myresult = myarr1.concat(myarr2);
console.log(myresult);

// Array Push add last array
const mutate = ["red", "green"];
const count = mutate.push("blue");
console.log(count);
console.log(mutate);

// Array Pop remove last array
const pop = mutate.pop();
console.log(pop);
console.log(mutate);

// Array Shift remove first array
const shift = mutate.shift();
console.log(mutate);
console.log(shift);

// Array unshift add data to first array
const unshift = mutate.unshift("red");
mutate.unshift("yellow");
console.log(mutate);
console.log(unshift);

// Array Splice // get data in array specific
const mutate_arr = ["red", "green", "0", "1", "blue"];
const spliced = mutate_arr.splice();

console.log(mutate_arr);

// mutate_arr.splice(0);
// การกำหนดตำแหน่งว่าจะเริ่ม remove จากตัวที่ 0

// mutate_arr.splice(1);
// ลบตั้งแต่ตัวที่ 1

// mutate_arr.splice(1, 1);
// ลบจากลำดับที่ 1 และลบออก 1 ตัว

// mutate_arr.splice(2, 2);
// ลบจากลำดับที่ 2 และลบออก 2 ตัว

mutate_arr.splice(2, 2, "white", "pink");
// ลบของเก่าและใส่ของใหม่

console.log(mutate_arr);

// Array slice
// เพิ่มค่าเข้าไปในตำแหน่งที่อยากได้
const mutate_arr1 = ["red", "green", "0", "1", "blue"];
// const sliced = mutate_arr1.slice(1);
//const sliced = mutate_arr1.slice(1, 2); // ดึงตั้งแต่ตำแหน่งที่ 1 ถึง 2 แต่ไม่รวม 2
const sliced = mutate_arr1.slice();
console.log(sliced);

// Avoid Array Mutation
const fruitss = ["banana", "apple", "mango"];
const newFruits = [...fruitss.slice(0, 1), "strawberry", ...fruitss.slice(1)];
console.log(newFruits);
console.log(fruitss);

const newFruits1 = [...fruitss.slice(0, 1), ...fruitss.slice(2)];
console.log(newFruits1);

// Array Loops
// forEach
const num_arr = ["one", "two", "three"];
num_arr.forEach((result) => {
  console.log(result);
});

// for of >> use if-elase
for (const v of num_arr) {
  if (v == "two") {
    // break; //out
    continue; // skip
  }
  console.log(v);
}

// Array index of
const num_arrays = [1, 4, 8, 10, 8, 11, 12];
// const index = num_arrays.indexOf(10);
const index = num_arrays.indexOf(8);
console.log(index);

// Array find index
const found = num_arrays.findIndex((e) => e % 4 == 0);
console.log(found);
