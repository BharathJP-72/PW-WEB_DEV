// forEach
const arr = [1,2,3,4,5,6,7,8,9,0]
arr.forEach((value,index,arr) => {
    console.log("hi",value,index,arr);
})

const anime = ['luffy','zoro','nami','usop','sanji','jimbei']
anime.forEach((value) => {
    console.log(value.toUpperCase());
})

// filter
const pirates = anime.filter((val) => {
    return val.endsWith('i')
})
console.log(pirates);

// reduce
const bill = [20,30,50]
const sumBill = bill.reduce((prev,curr) => prev + curr,0)
console.log(sumBill);

// every - apply condn on all values
const x = [10,50,32,41,85,69]
const checkX = x.every((val) => typeof val === "number")
console.log("all values are num: "+checkX); 

// findIndex
// some
// sort