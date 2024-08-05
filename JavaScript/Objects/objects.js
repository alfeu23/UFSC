function cat(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
}

cat.prototype.greeting = function () {
  console.log(`Hello Im ${this.name} and my Im a ${this.breed}`);
};

const cat1 = new cat("Berto", "Laranja", "Laranja");
const cat2 = new cat("Azar", "Preto", "Preto");

cat1.greeting();
cat2.greeting();
