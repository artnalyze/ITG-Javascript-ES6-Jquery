// declare function
function wakeup(){
    console.log("Hey wakeup");
}

// declare function one parameter
function sayHello(name){
    console.log("Hello " + name);
}

// declare function two parameter
function calArea(width, height) {
    var area = width * height;
    return area;
}

// call function
wakeup();
sayHello("Artdvp");
var aa = calArea(100,20);
console.log("Area: " + aa);

// function expressions
// save function in variable
// anonymous function
var action = function(a,b) {
    return a * b;
}

console.log(action(1,2));

var result = action(4,3);

console.log(result);