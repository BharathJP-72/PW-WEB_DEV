// ARRAYS -> can contain heterogeneous elements
let a = [1,22,3.44,"luffy"]
console.log(a);

// creating an array with n empty spaces(of size n) arr_name = new Array(n)
b = new Array(10)
console.log(b);
// the new keyword is used to create an instance of an object by calling the constructor method. 

// another method to make an array
c = Array("luffy","zoro","nami")
console.log(c);
console.log(c[2]);
c[2] = "robin"
console.log(c[2])

// Array methods
// push an item to the last
d = [1,2,3,4]
d.push(5)
d.push(6)
console.log(d);

// pop() -> pops the last element
d.pop()  
console.log(d);

d.shift() //removes the item from the start
console.log("1st ele removed",d);
d.unshift(100) //adds an item to the start  
console.log("added 100 to the start",d);

// new_arr = a1.concat(a2) -> concatenates a1&a2
const a1 = [1,2,3,4]
const a2 = [5,6,7,8]
const res = a1.concat(a2)
console.log("concatenated a1 & a2",res);

// const s = array_name.slice(start-index-val,end_index_val-1)
const s = res.slice(2,5)
console.log("sliced array",s);

// const str = a1.join("~") -> joins all the elements of the array with "~" into a string 
const str1 = res.join("~")
console.log("joined array with ~",str1);

// const rev = a1.reverse()
const rev = a1.reverse()
console.log("reversed array",rev);

// console.log(Array_Name.indexOf(item)); -> returns the index if ele is present 
console.log("index of 2 in a1",a1.indexOf(2));

// SPLICING AN ARRAY | const removed = Array_Name.splice(start_val,delete_this many,add i1,add i2, ... , add i nth)
const removed = res.splice(4,3,1111,2222,3333)
console.log("slpiced array : ",res,"elementts removed : ",removed);

function comparePasswords(password1, password2) {
    return password1 === password2;
  }
  
  const pass1 = "secret123";
  const pass2 = "secret12344";
  
  if (comparePasswords(pass1, pass2)) {
    console.log("Passwords match!");
  } else {	
    console.log("Passwords don't match.");
  }
  
/*
== (Abstract Equality): Compares values for equality after converting both values to a common type. For example, 2 == "2" is true because JavaScript converts the string "2" to the number 2 before comparing.

=== (Strict Equality): Compares values for equality without type conversion. Both the value and type have to be the same for it to be true. So, 2 === "2" is false because the types are different (number vs. string).
*/

  function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i)); // 0, 1, 1, 2
  }

  console.log("num div by zero \n",2/0)

  //turning a string into an array
  let str101  = "hi how are you "
  let ax1 = str101.split(" ")
  console.log(ax1);
  