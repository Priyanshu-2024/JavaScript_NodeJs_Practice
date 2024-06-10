function todo(task) {
  console.log("Start of todo");
  setTimeout(function fun() {
    console.log("completed", task);
  }, 3000);
  console.log("End of Todo");
}

console.log("Start");
todo("Projects");
console.log("end");
