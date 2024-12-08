// function name(params) {
     // fn code
     // return -> terminates the fn ,even if there is code below this 
     // if there no return and if u have called the fn through a var it will give undefined . even if a return st is present without any value it gives undefined 
    
// }

function f1(e=2) {
    return e**2
}
// e=2 is the default parameter value if no argument is passed
console.log("squared nums: ",f1(3));

// default values are always set from the right most, and when args are passed its always filled from the leftmost paraameters
// function s1(x , y = default_val) {
//     return x+y
// }

// PASSING UNLIMITED NUM OF ARGUMENTS TO A FUNCTION
// even if it was sum(x,y) still all the 10 arguments would be passed to the function
function sum() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum
}

arr1 = [1,2,3,4,5,6,7,8,9,10]
console.log("sum of all the elements of the array: ",sum(...arr1));
/*The issue is that the arguments object in JavaScript functions contains all arguments passed to the function, and it doesn’t handle arrays as a single argument unless they’re spread. When you pass arr1 as an argument, it treats it as a single element, an array, not its individual elements.

To fix it, you can use the spread operator ... to pass each element of the array as a separate argument to the sum function */

// ~~~~~~ ARROW FUNCTIONS ~~~~~~~~

// A] One parameter 
const cube = (x) => x ** 3
console.log("cubed nums : ",cube(2));

// B] Multiple parameter
const sub = (x,y) => x-y
console.log("subtracted nums : ",sub(8,3));

// C] Multiple statements 
const mul = (x,y) => {
    console.log(`multiplying ${x} and ${y}`);
    return x*y
}
console.log(mul(8,6));
// we have a template literal enclosed by backticks (`). Template literals allow you to embed expressions (variables or other values) directly into a string.
// ${x} (which represents the value of the variable x)

// D] Returning an obj
const arithmetic = (x,y) => ({ sum: x + y, diff:x-y, mul:x*y , div: x/y})
console.log(arithmetic(5,2));

// ~~~~~~~ ANONYMOUS FUNCTIONS ~~~~~~~~
// let var_name = function(parameters){
//     code
// }
// fn without a name , we can assign a block of code to a variable
let wano = function(x){
    console.log("the land of wano has been liberated by ",x);
}
wano("luffy")

// // ~~~~ Immediately Invoked Function Execution(IIFE) ~~~~~
// (function (parameters){
//     // fn body
// })(arg)
// --> IIFE syntax is less common in modern JavaScript, as arrow functions and block-scoped variables (such as const and let) are preferred.

// (function (n,m){
//     console.log("modulus nums: ",n * m);
// })(23,10);
