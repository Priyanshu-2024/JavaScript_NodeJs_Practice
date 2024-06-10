
//main function takes function as a parameter
function mapper(arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let res = fn(arr[i], i);
    result.push(res);
  }
  return result;
}

//calling function and passing as a callback
let arr = [1,2,3,4,5];
let x = mapper(arr, function cuber(v,i){
    console.log(v, v*v*v , i)
    return v*v*v 
})

console.log(x, arr);



//callback inversion of control
function sayHello() {
  console.log('Hello, world!');
}

function performTask(callback) {
  console.log('Task started.');
  
  setTimeout(() => {
      console.log('Task completed.');
      callback(); // This is where the callback is called
  }, 1000);
}

// Start the task and pass the callback
performTask(sayHello);


//callback hell
function fetchData(callback) {
  setTimeout(() => {
      callback('Data fetched');
  }, 1000);
}

function processData(data, callback) {
  setTimeout(() => {
      callback(`Processed: ${data}`);
  }, 1000);
}

function saveData(data, callback) {
  setTimeout(() => {
      callback(`Saved: ${data}`);
  }, 1000);
}

fetchData(data => {
  processData(data, processedData => {
      saveData(processedData, savedData => {
          console.log(savedData);
      });
  });
});



