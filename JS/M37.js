// null -> no value
// undeffined -> the var is declared and has a memory space allocated but there is no value assigned to it 
// In JavaScript, an object is a standalone entity that can hold properties and methods.
// Properties: These are key-value pairs | Methods: These are functions associated with the object.Object Literal: You define the object directly using curly braces {} and specify its properties and methods.
// if else

/*var: Old school. It’s function-scoped, so you can use the same variable across different scopes, which can cause some serious trouble.

let: New kid on the block. Block-scoped, meaning it’s only accessible within the curly braces you defined it in. Prevents those pesky accidental global variables.

const: The rock. Also block-scoped, but it’s a constant reference. Once you assign a value, you can’t reassign it. However, if it’s an object or array, you can still mutate it. */

/*JavaScript is what’s known as a dynamically typed language. This means that the type of a variable is determined at runtime, not in advance. You don’t have to specify the data type when you declare a variable because JS figures it out on the fly. It's like a chameleon, changing type based on what’s assigned to it. */

let a = 100
let b = 25

if(a<b){
    console.log("b is greater");
}
else if(a>b){
    console.log("a is greater")
}

let x = {} //{} -> empty obj 
let y = undefined
let z = null
if(x){
    console.log("empty x")
}
if(y){
    console.log("this line won't print");
}
if(z){
    console.log("z holds a value");
}
else {
    console.log("z is null");
}

// example for if use case
// let p;
// p = somefunction()
// if(p){
//     // do xyz
// }

// === -> strict check , == -> loose check

// ternary operator -> usedd more in react , used as a substitute for if & else
// var-name ? true-part : false-part
let onepiece = false
onepiece ? console.log("Congrats u found the onepiece") : console.log("Onepiece not found "); 