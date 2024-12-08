const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,0]

// const res1 = arr1.concat(arr2)
// console.log(res1);
//... -> here it is spreading the array 
const res2 = [...arr1,...arr2]
console.log(res2);

// let f1 = () => {
//     let args = Array.from(arguments)
//     const newArray = args.map(ele => ele * 2)
//     console.log(newArray);
// }
/*Arrow functions do not have their own arguments object. Instead, they inherit the arguments object from the closest non-arrow function. However, since your arrow function doesn't have a surrounding non-arrow function to inherit the arguments object from, it results in an empty array, which causes the map operation to return NaN.

o/p: [ NaN, NaN, NaN, NaN, NaN ]
[ NaN, NaN, NaN, NaN, NaN ]*/

//1
function f1() {
    let args = Array.from(arguments)
    const newArray = args.map(ele => ele * 2)
    console.log(newArray);
}
f1(7,8)
f1(7,8,9)


function f2(...arg) {
    const newArray = arg.map(ele => ele * 2)
    console.log("method 2: ",newArray);
}
f2(5,6)
f2(5,6,7)

//2
let a1 = [4,5]
let a2 = [1,2,3,...a1,6,7,8,9,0]
console.log(a2);

//3
const name1 = "Bharath JP"
console.log([...name1]);

//4 rest -> the induvidual elements are being packed up 
function f3(...val) {
    console.log(val);
}

f3("Hello","Hi")

//Set - >A Set in JavaScript is a collection of unique values where each value can occur only once. It allows you to store distinct values of any type, whether primitive or object references.

//1
let set1 = new Set()
set1.add(1)
set1.add(2)
set1.add(3)
set1.add("hi")
set1.add(3)

console.log("Set1 -> ",set1);

//2
let myArray = [1,2,3,4,5,6,5,7,2]
let set2 = new Set(myArray)
console.log("Set2 -> ",set2);

//3
console.log("Set2 has 7 -> ",set2.has(7));
console.log("Set2 has 77 -> ",set2.has(77));

//4
set2.delete(3)
console.log("Set2 after deleting 3 ->",set2);

//5
let set3 = new Set([10,20,30,40,50,60])
console.log("Set3-> ",set3);
console.log("Set3 -> ",set3.clear());

//Map -> A Map in JavaScript is a collection of key-value pairs where both keys and values can be of any type. It maintains the order of insertion and allows for efficient retrieval of values based on their corresponding keys.

let myMap = new Map()

let arrayForMap = [
    [1, "Luffy"],
    [2, "Zoro"],
    [3, "Nami"],
    [4, "Usop"],
    [5, "Sanji"],
    [2, "Zoro"],
    [6, "Zoro"],
    [4, "Jimbei"]
]

arrayForMap.map(ele => myMap.set(ele[0], ele[1]))
console.log("Map -> ",myMap);

