const fetchData = () => {
  setTimeout(() => {
    callback("done");
  }, 1500);
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData((text) => {
    console.log(text);
  });
}, 2000);

console.log("hi!");
console.log("hello!");
