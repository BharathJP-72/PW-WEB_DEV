class Product {
    constructor(n,p,d) {
        this.name = n
        this.price = p
        this.discount = d
    }

    discountPrice() {

        return this.price * (Math.floor(100 - this.discount)/100)
    }

    display() {
        console.log("Phone model : " , this.name , "\nPhone price : Rs." ,this.price , "\nDiscounted price : Rs.",this.discountPrice());
    }
}

const p1 = new Product("S24 Ultra",115000,10)
p1.display()