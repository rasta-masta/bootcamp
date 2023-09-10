class Product {
  name =""
  price = 0

  constructor(name, price){
    this.name = name
    this.price = price
  }
}

const product1 = new Product("apple", 4000);
const product2 = new Product("orange", 2000); 
const product3 = new Product("melon", 10000); 
const product4 = new Product("banana", 20000); 

class Transaction {
  constructor() {
    this._total = 0
    this.product = []
  }

  addToCart(item, qty) {
    item.qty = qty
    this.product.push(item)
  }

  getTotal() {
    this.product.forEach(item => {
      this._total += item.price *item.qty
      console.log(`${item.name} x ${item.qty} = ${item.price * item.qty}`)
  })
  console.log(`Total : ${this._total}`)
  }

  checkout(money) {
    if(money < this._total){
      console.log("money is not enough..!")
    } else {
      console.log(`cash : ${money}`)
      console.log(`return: ${money} - ${this._total} = ${money - this._total}`)
    }
  }
}  

const transaction1 = new Transaction()
transaction1.addToCart(product1, 3)
transaction1.addToCart(product2, 1)
transaction1.addToCart(product3, 4)
transaction1.addToCart(product4, 2)
transaction1.getTotal()
transaction1.checkout(10000)

