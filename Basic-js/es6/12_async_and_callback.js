// Synchronous & Asycncronous Programming in JavaScript

// function doA() {
//   setTimeout(() => {
//     console.log("This is 1st say message");
//   }, 3000);
// }

// function doB() {
//   console.log("This is 2nd say message");
// }

// doA();
// doB();

function doA(callback) {
  console.log("Loading...");
  setTimeout(() => {
    console.log("This is 1st say message");
    callback();
  }, 2000);
}

function doB() {
  console.log("This is 2nd say message");
}

// call work
doA(function () {
  // callback function
  doB();
});

console.log("--------------------------------");
// Example Load data from ajax
function loadNews(cb) {
  console.log("Loading...");
  setTimeout(() => {
    cb([
      { id: 1, title: "a" },
      { id: 2, title: "b" },
      { id: 3, title: "c" },
      { id: 4, title: "d" },
      { id: 5, title: "e" },
      { id: 6, title: "f" },
      { id: 7, title: "g" },
    ]);
    // console.log("In time");
  }, 2000);
}

// call work
loadNews((result) => {
  console.log(result);
  console.log("load data complete");
});
