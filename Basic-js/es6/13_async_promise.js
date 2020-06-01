// Async Promise = value, future
const a = "Yes";

const ap = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK");
    // reject("Cancel");
  }, 3000);
});

console.log(a);
console.log(ap); // Promise {<pending>}

// หากเราต้องการเปิดกล่อง Promise ออกมา
// ap.then((e) => {
//   console.log("Loading.....");
//   console.log(e);
// });

ap.then((e) => {
  return `My answer is : ${e}`;
})
  .then((e) => {
    console.log(e);
  })
  .catch((e) => {
    console.log(e);
  });
