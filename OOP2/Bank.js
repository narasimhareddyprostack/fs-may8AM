class Bank {
    min_Bal = 500
    set_Name(name) {
        this.name = name
    }
}
let c1 = new Bank()
console.log(c1)
//console.log(c1.min_Bal)   //500
c1.set_Name("Rahul Gandhi")
console.log(c1)
