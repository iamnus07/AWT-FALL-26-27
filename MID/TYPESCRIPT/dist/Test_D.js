"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name1 = "nizam";
let age1 = 25;
let grade1 = 3.5;
console.log(`Name: ${name1}, Age: ${age1}, Grade: ${grade1}`);
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(`Sum: ${sum}`);
let a = 5;
let b = 10;
console.log("addition of a and b is: " + (a + b));
console.log("subtraction of a and b is: " + (a - b));
console.log("multiplication of a and b is: " + a * b);
console.log("division of a and b is: " + a / b);
function getName() {
    let name = "nizam";
    return name;
}
function getAge() {
    let age = 25;
    return age;
}
function getGrade() {
    let grade = 3.5;
    return grade;
}
// Return type is IStudent because we are returning an object
function getStudentInfo() {
    let name = getName();
    let age = getAge();
    let grade = getGrade();
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade}`);
    return { name, age, grade };
}
async function getStudentinfo2() {
    let name = getName();
    let age = getAge();
    let grade = getGrade();
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade}`);
    return { name, age, grade };
}
function getstudentInfo3() {
    let name = getName();
    let age = getAge();
    let grade = getGrade();
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
//# sourceMappingURL=Test_D.js.map