let isPrime = (x) => {
    try {
        for (let i = 0; i <= x-1; i++) {
            if (x % 2 == 0) {
                // console.log("not a prime");
                throw new Error("not a prime") 
            } 
        }
        return "its a prime"
    } catch (e) {
        console.log("handled",e);
    }
    finally{
        console.log("this exe regardless");
    }
}

console.log(isPrime(110));