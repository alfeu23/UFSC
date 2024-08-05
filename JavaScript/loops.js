const myArray = ["tomatoes", "chick peas", "onions", "rice", "black beans"];
for (let item of myArray) {
  console.log(item);
}

const name = "Mustafa";
const phonebook = [
  { name: "Chris", number: "1549" },
  { name: "Li Kang", number: "9634" },
  { name: "Anne", number: "9065" },
  { name: "Francesca", number: "3001" },
  { name: "Mustafa", number: "6888" },
  { name: "Tina", number: "4312" },
  { name: "Bert", number: "7780" },
  { name: "Jada", number: "2282" },
];
for (let person of phonebook) {
  if (person.name === "Mustafa") {
    console.log(`${person.name} number is ${person.number}`);
  }
}

function isPrime(num) {
  for (let j = 2; j < num; j++) {
    if (num % j === 0) {
      return false;
    }
  }

  return true;
}

for (let i = 30; i >= 2; i--) {
  if (isPrime(i)) console.log(`${i}`);
}
