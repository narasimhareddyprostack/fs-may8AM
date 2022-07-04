class Savings_Account {
    min_Bal = 500;
    open_Account() {
        console.log("Opend Accout Successfully")
    }
    deposit_Amount() { }
    withdraw_Amount() {
        console.log("Withdraw _Money")
    }
    get_Statement() { }
    get_Bal() { }
    close_Account() { }
}
let c1 = new Savings_Account()
console.log(c1.min_Bal)
c1.open_Account();
c1.withdraw_Amount()