class Savings {
    min_Bal = 500
    set_Name(name) {
        this.name = name
    }
    set_Amount(amount) {
        this.amount = amount
    }
}
let c1 = new Savings()
c1.set_Name("Rahul")
c1.set_Amount(5000)
console.log(c1)