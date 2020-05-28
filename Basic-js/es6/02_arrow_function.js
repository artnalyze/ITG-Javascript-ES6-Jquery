// ES5

var greet = function(name, message) {
    return message + name;
}

console.log(greet("Art","dvp"));

// ES6
let arrowGreet = (name, message) => {
    return message + name;
}

console.log(arrowGreet("Art","Hello"));

let arrowGreet2 = (name, message) => message + name;

console.log(arrowGreet2("Art","Hello"));

let arrowGreet = message => message;