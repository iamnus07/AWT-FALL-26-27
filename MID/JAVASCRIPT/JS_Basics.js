const name = "asha";
let marks = 80;

console.log(name);
console.log(marks);

if (marks > 50) {
  console.log("pass");
} else if (marks >= 80) {
  console.log("A+");
} else {
  console.log("fail");
}

const marks1 = [33, 34, 45];
for (let i = 0; i < marks1.length; i++) {
  console.log(marks1[i]);
}

//what is difference between argument and parameter.
//what is diferrece between value and reference
//why we do not write in object function keyword

function getResult(marks) {
  if (marks >= 50) {
    return "pass";
  }
  return "faile";
}
console.log(getResult(45));
console.log(getResult(80));

const student = {
  sname: "nizam",
  sage: 23,
  sdept: "cse",
  smarks: 65,

  showClassResult() {
    if (this.smarks >= 80) {
      return this.sname + "passed";
    }
    return this.sname + "failed";
  },
};

console.log(student.sname);
console.log(student.sage);
console.log(student.sdept);
console.log(student.showClassResult());
