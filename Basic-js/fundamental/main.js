//alert("JS");
document.write("Hello JavaScript!<br>");
document.write("<b>Welcome JS</b>");
document.write("<h1>Helllllllo</h1>");4

var name = "art dvp";
// var age = 28;

// document.write(name + " " + age);
// console.log(name);
// console.log(age);

// var status = confirm("Art you ok?");
// console.log(status);

// var msg = prompt("Please enter name ?");
// console.log(msg);
var age = prompt("Enter your age :","0");
// var votable = (age >= 18) ? "You can vote" : "Can not vote";
// console.log(votable);

// condition
if (age > 10 && age <= 25){
    console.log("you young");
} else if (age > 25 && age <=50){
    console.log("you old");
} else if(age > 50) {
    console.log("you very old");
} else {
    console.log("you baby");
}

// function date
var day = new Date().getDay();
console.log(day);

switch(day) {
    case 0:
        console.log("Sunday");
        document.body.style.backgroundColor = "red";
        break;
    case 1:
        console.log("Monday");
        document.body.style.backgroundColor = "yellow";
        break;
    case 2:
        console.log("Tursday");
        document.body.style.backgroundColor = "pink";
        break;
    default:
        console.log("invalid day");
        document.body.style.backgroundColor = "white";
        break;
}