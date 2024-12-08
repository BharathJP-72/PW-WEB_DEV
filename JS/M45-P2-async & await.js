// async fn always returns a promise
// async function fn1 () {
//     return 72
// }
// console.log(fn1());

console.log("Hello!!");

let promiseFunction = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Welcome");
            let x = Math.random()

            if(x > 0.5)
                resolve("Resolved")
            else
                reject("Rejected")
        },5000)
    })
}

async function recieverFunction() {
    try {
        let msg = await promiseFunction()
        console.log(msg);
    } catch (error) {
        console.log(error);
        
    }
}
console.log("outside async fn");
recieverFunction()