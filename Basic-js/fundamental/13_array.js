// Basic Array
// var name =['John', 'Joe', 'Jack', 'Jane'];

// console.log(name);

// console.log(typeof(name));

var fisrtname = ['John', 'Joe', 'Jack', 'Jane'];
var fruits = new Array("Apple", "Banana", "Orange", "Mango");
console.log(fisrtname[0]);
console.log(fisrtname[1], fisrtname[3]);

// change value
fisrtname[1] = "Jany";
console.log(fisrtname);

// add value to array
fisrtname[4] = "Johny";
console.log(fisrtname);

for(var i = 0; fisrtname[i]; i++){
    console.log(fisrtname[i]);
}

function myFruit(value){
    console.log(value);
}

fruits.forEach(myFruit);
