// Object
var obj = {
    a: "Hello World",
    b: 42,
    c: true
};

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

console.log(obj["a"]);
console.log(obj["b"]);
console.log(obj["c"]);

var obj2 = {
    a: "hello",
    b: 45
};

var b = "a";
console.log(obj[b]);
console.log(obj["b"]);

// Arrays
var arr = [
    "Hello world",
    42,
    true
];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr.length);

console.log(typeof arr);

// Functions
function foo() {
    return 42;
}

foo.bar = "hello world";

console.log(typeof foo);
console.log(typeof foo());
console.log(typeof foo.bar);

// Built-In Type Methods
var a = "Hello world";
var b = 3.14159;

console.log(a.length);
console.log(a.toUpperCase());
console.log(b.toFixed(4));

// Comparing Values
// Coercion
