//                  OBJECTS

// let obj_name = {key:values, key:values, key:values}

let crew = {capn: "Luffy", crew_name:"Strawhats", size: 10}
console.log("OBJECT 1 -->",crew);

// Another way to create an obj: 
// let obj_name = new Object() 
let cars = new Object()
cars.manufacturer = "Pagani"
cars.model = "Huayra"
cars.horsepower = 790
// cars.manufacturer = "Ferrari" --> upon doing this the "manufacturer" key will hold the value "Ferrari"  

console.log("OBJECT 2 -->", cars);

console.log(crew.capn + " " + cars.model);
// console.log(crew.capn, cars.model);  Output: same as "crew.capn + ' ' + cars.model"


// creating objects using fn
// function obj_name(arg1,arg2,arg3) {
//     this.key1 = arg1
//     this.key2 = arg2
//     this.key3 = arg3
// }
// const var = new obj_name(val1,val2,val3)
function emp(i, n, s) {
    this.id = i;
    this.name = n;
    this.salary = s;
}

const x = new emp(7, "zoro", 11110000)

console.log("OBJECT 3 -->", x);

// basic values manipulation in obj
// accessing values
console.log(cars.model);
console.log(cars['model']);

// adding new entities
cars.cost = "Rs. 16.21 Cr"
cars['engine'] = "V12"

// deleting enitites
delete cars.horsepower

//          object methods

// accessing keys
const k = Object.keys(cars)
console.log("keys of obj: cars",k);

// accessing values
const v = Object.values(cars)
console.log("values of obj: cars",v);

// accessing entries
const e = Object.entries(cars)
console.log("entries of obj: cars",e);

// freezing an object : no changes can be made to the obj 
const f = Object.freeze(cars)
cars.engine = "V8"
console.log("no changes made to the obj -> ",f);

// sealing an object: only updation of obj is allowed
const s = Object.seal(cars)
cars.cost = "Rs. 18.69 Cr"
delete cars.engine
console.log("changes made to the obj -> ",s);

// copying contents of one obj to another
const cp = Object.assign(crew, cars)
console.log("copied cars into crew -> ",crew);

