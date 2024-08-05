const cats = require("./sample.json");

const motherInfo = cats.map((cat) => cat.name).join(", ");

let totalKittens = 0;
let maleKittens = 0;
let femaleKittens = 0;

cats.forEach((cat) => {
  totalKittens += cat.kittens.length;
  maleKittens += cat.kittens.filter((kitten) => kitten.gender === "m").length;
  femaleKittens += cat.kittens.filter((kitten) => kitten.gender === "f").length;
});

const kittenInfo = {
  total: totalKittens,
  males: maleKittens,
  females: femaleKittens,
};

console.log("Mother Info:", motherInfo);
console.log("Kitten Info:", kittenInfo);
