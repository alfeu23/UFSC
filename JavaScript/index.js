// this is a statement. a statement is a piece of action that the needs to do.
console.log("hello world!!");

const nome = "pedro"; // string
let age = "19"; // int
let isAprovved = true; // Boolean
let firstName; // Se criarmos uma variavel e nao colocar valor dentro dela, ela vai ficar igual a undefined
let selectedCar = null; // This will let us save the user input, for example: He is chosing a color for something
//-> When there is no answer (YET) we set it as null

let person = {
  nomeCarol: "Carol",
  age: 20,
};

let selection = "age";
person[selection] = 21;

let selectedColors = ["red", "blue"];
selectedColors[2] = "green";

// This performs a task
function greet(name, lastName) {
  console.log("hello " + name + " " + lastName);
}

function square(number) {
  return number ** 2;
}

console.log(square(2));

greet("Carolina", "Lemos");
greet("Sogrinha", "Ochoa");

console.log(nome);
console.log(person.age);
console.log(selectedColors.length);
