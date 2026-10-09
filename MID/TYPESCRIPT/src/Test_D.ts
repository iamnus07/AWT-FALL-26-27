interface IStudent {
  name: string;
  age: number;
  grade?: number;
}

let name1: string = "nizam";
let age1: number = 25;
let grade1: number = 3.5;

console.log(`Name: ${name1}, Age: ${age1}, Grade: ${grade1}`);

let num1: number = 10;
let num2: number = 20;

let sum: number = num1 + num2;

console.log(`Sum: ${sum}`);

let a: number = 5;
let b: number = 10;

console.log("addition of a and b is: " + (a + b));
console.log("subtraction of a and b is: " + (a - b));
console.log("multiplication of a and b is: " + a * b);
console.log("division of a and b is: " + a / b);

function getName(): string {
  let name: string = "nizam";
  return name;
}

function getAge(): number {
  let age: number = 25;
  return age;
}

function getGrade(): number {
  let grade: number = 3.5;
  return grade;
}

// Return type is IStudent because we are returning an object
function getStudentInfo(): IStudent {
  let name: string = getName();
  let age: number = getAge();
  let grade: number = getGrade();

  console.log(`Name: ${name}, Age: ${age}, Grade: ${grade}`);

  return { name, age, grade };
}

async function getStudentinfo2(): Promise<{
  name: string;
  age: number;
  grade: number;
}> {
  let name: string = getName();
  let age: number = getAge();
  let grade: number = getGrade();

  console.log(`Name: ${name}, Age: ${age}, Grade: ${grade}`);

  return { name, age, grade };
}

function getstudentInfo3(): IStudent {
  let name: string = getName();
  let age: number = getAge();
  let grade: number = getGrade();

  console.log(`Name: ${name}, Age: ${age}, Grade: ${grade}`);

  return { name, age, grade };
}

async function main() {
  console.log(await getStudentinfo2());
  console.log(getstudentInfo3());
  console.log(getStudentInfo());
}

// Call the main function
main();
