//1
let pattern = "in"
let flag = 'gi'
let regExOne = new RegExp(pattern,flag)
const strToCheck = "In & Out is a fastfood place in the US, burgers are popular IN iN & out"
const result1 = regExOne.test(strToCheck)
console.log("Checking if the pattern: ",pattern,"is present->",result1);


let regExTwo = /In/gi
const result2 = strToCheck.match(regExTwo)
console.log("\nmatches: ",result2);

const result3 = strToCheck.replace(regExTwo, 'I|N')
console.log("\nreplaced regex string: ",result3);