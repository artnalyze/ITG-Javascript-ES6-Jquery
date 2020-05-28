// Spread
const arr = [4, 5, 6];
const append = [1, 2, 3, arr];
console.log(append);

// Spread
const arr2 = [4, 5, 6];
const append2 = [1, 2, 3, ...arr];
console.log(append2);

// Ex.3
const arr4 = ["a", "b", "c"];
const arr5 = ["d", "e", "f"];
//arr4.push(arr5);
arr4.push(...arr5);
console.log(arr4);

// Ex 4
let add = (x, y, z) => {
  return x + y + z;
};

const numbers = [1, 2, 3];

const sum = add(...numbers);
console.log(sum);

// Rest Parameter
function howManyArgs(...args) {
  console.log(args.length);
  console.log(args);
}

howManyArgs();
howManyArgs(4);
howManyArgs(4, 7, 8);
howManyArgs(4, 7, 8, 9, 10);

// Ex 1
function multiply(multiplier, ...array) {
  return array.map((e) => multiplier * e);
}

const result = multiply(2, 10, 20, 30);
console.log(result);
