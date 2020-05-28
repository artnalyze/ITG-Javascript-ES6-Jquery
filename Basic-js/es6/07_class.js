// Create class
class Person {
  // create constructor
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(`Hi, My name is ${this.name}`);
  }

  get gender() {
    return this._gender;
  }
  set gender(g) {
    this._gender = g;
  }
}

// create object instance
const p = new Person("Artdvp");
console.log(p.name);
console.log(p.sayHi());

p.gender = "Male";
console.log(p.gender);