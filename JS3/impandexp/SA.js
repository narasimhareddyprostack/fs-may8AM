const Account = require('./Account')
class Savings_Account extends Account {
    min_Bal = 600
    constructor(id, name, mobile, address, amount) {
        super(name, mobile, address)
        this.acc_Id = id;
        this.acc_Amount = amount
    }
}
let s1 = new Savings_Account(4324423452, "Rahul Gandhi", 9695434342, "Noida Streets", 5000)
console.log(s1)