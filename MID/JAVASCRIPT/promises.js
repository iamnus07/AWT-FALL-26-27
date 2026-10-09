function getStudentData() {
  return new Promise((resolve, reject) => {
    console.log("promises start..");
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({
          id: 123,
          name: "hamim",
          cgpa: 2.5,
        });
      } else {
        reject("failed to get student data");
      }
    }, 2000);
  });
}

getStudentData()
  .then((student) => {
    console.log("student data recive");
    console.log("id: ", student.id);
    console.log("name: ", student.name);
    console.log("cgpa", student.cgpa);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
