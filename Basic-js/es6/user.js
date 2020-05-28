export default class User { // add word default แปลว่าเรียกได้อัตโนมัติ
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log("Hi " + this.name);
  }
}

