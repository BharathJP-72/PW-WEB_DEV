// A function that returns a function or takes other functions as arguments is called a higher order function

// 1 
const square = (n) => {
    return n**2
}

const cube = (square, n) => {
    return square(n) * n
}

console.log("cube = " + cube(square,4));

// 2
function f1() {
    return () => {
        console.log("Yo");
    }
}
let a = f1()
console.log(a);

// 3 -> Nested Functions
const f2 = m => {
    const f3 = n =>{
        const f4 = o => {
            return m + n + o
        }
        return f4
    }
    return f3
}
console.log(f2(10)(20)(30));

// 4 -> fn with similar mechanism of a "for loop"
const arr = [1,2,3,4,5,6]

const sumArray = arr => {
    let total = 0
    arr.forEach(function(element) {
        total += element
    });
    return total
}

console.log("Total sum of array = " + sumArray(arr));

// 5 
setInterval(() =>{
    console.log("The OnePiece is real!!",Math.random());
}, 1000)

// setInterval(fnName/declareFunction,timeInterva)

setTimeout(() => {
    console.log("Laughtale!!",Math.random());
}, 3000);