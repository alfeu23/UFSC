class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi, im ${this.name}`);
  }
}

class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(`My name is ${this.name}, and i teach ${this.teaches}`);
  }
  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}
class Student extends Person {
  #year;

  constructor(name, year) {
    super(name);
    this.year = "eleven";
  }

  introduceSelf() {
    console.log(`Hi im ${this.name} and im from year ${this.year}`);
  }
}
new Person("alfeu").introduceSelf();
new Professor("lucas", "code").introduceSelf();
new Student("fabao", "eleven").introduceSelf();

class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    console.log(this.sides * this.sideLength);
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super("Square", 4, sideLength);
  }
  calcArea() {
    console.log(this.sideLength ** 2);
  }
}

new Shape("triangle", 3, 3).calcPerimeter();

const suqre = new Square(5);
suqre.calcArea();
suqre.calcPerimeter();
