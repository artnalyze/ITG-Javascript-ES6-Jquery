// ES5
var scores = [55, 65, 82];
var s1 = scores[0];
var s2 = scores[1];
console.log(s1, s2);

// ES6 Destructuring
const scores2 = [55, 65, 82];
const [s11, , s33] = scores2;
console.log(s11, s33);

// Return object
function createUser() {
  return {
    name: "Art",
    age: 26,
  };
}

const { name, age } = createUser();
console.log(name, age);
