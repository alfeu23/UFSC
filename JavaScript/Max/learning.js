function person(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
}

person.prototype.greet = function () {
  console.log(
    `Hi, i am ${this.name} and Im ${this.age} years old. My hobby is ${this.hobby}.`
  );
};

const hobbies = ["Sports", "Cooking"];

for (let carol of hobbies) {
  console.log(carol);
}

const person1 = new person("max", "29", hobbies[0]);
const person2 = new person("alfeu", "19", hobbies[1]);

person1.greet();
person2.greet();

console.log(
  hobbies.map((hobby) => {
    return hobby;
  })
);

const copiedArrays = [...hobbies];
console.log(copiedArrays);

const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));

const band = {
  name: "The Fellers",
  founded: 2023,
};

const { name, founded } = band;
console.log(name, founded);

const championsLeague = ["Ahri", "Aatrox"];
const [champion1, champion2] = championsLeague;
console.log(champion1 + "\n" + champion2);
