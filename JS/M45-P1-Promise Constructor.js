//Runtime Enviroinment --> provides js with features to execute
/*js is a synchronous language" ?
JavaScript is inherently a single-threaded, synchronous language, which means it executes one line of code at a time, in order. However, it has mechanisms to handle asynchronous operations, which can make it seem asynchronous in practice.

Here's how it works:

Synchronous Execution: By default, JavaScript executes code in a sequential manner, waiting for one operation to complete before moving on to the next. For example, if you have a loop that takes time to execute, JavaScript will block further code execution until the loop finishes.

Asynchronous Operations: JavaScript can perform certain operations asynchronously using features like callbacks, Promises, and async/await. These mechanisms allow the code to continue executing while waiting for certain operations to complete, such as fetching data from a server or reading a file. This non-blocking behavior is managed by the event loop and callback queue. */

// let timeConsumingTask = () => {
//     for (let i = 0; i < 10000000000; i++) {
//         // some task
//     }
//     return "timeConsumingTask is done!!"
// }

// console.log("start");
// timeConsumingTask()

// setTimeout( () => {
//     console.log("timer completed");
// },2000)

// console.log("exited timer"); 
// timeConsumingTask()

// console.log("end");

/*const myPromise = new Promise((resolve, reject) => {
  // asynchronous operation
  let condition = true; // or some condition
  if (condition) {
    resolve('Promise resolved successfully!'); // fulfilled
  } else {
    reject('Promise rejected.'); // rejected
  }
});
 */
console.log("start");

let f1 = () => {
    for (let i = 0; i < 10000000000; i++) {
        if (i == 1) {
            console.log("Function started!!");
        }
    }
}
f1()
let promiseFunction = () =>{
    return new Promise(p1 = (resolve,reject) =>{
        setTimeout(functionInPromise = () => {
            let randomNumber = Math.random()
            if(randomNumber > 0.5)
                resolve("done")
            else
                reject("ErrorXYZ")
        })
    })
}

console.log("end");

let a = promiseFunction()

a
.then(p1 = (val) => {
    console.log("The promise is resolved and ",val);
})
.then(console.log("congrats"))
.catch(p1 = (val) => {
    console.log("Error in promise: ",val);
})