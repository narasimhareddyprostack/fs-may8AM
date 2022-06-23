class Savings {
    constructor(a, b, c) {
        this.account_Id = a
        this.account_Name = b
        this.account_sal = c
    }
    open_Account() {
        console.log("Hi", this.account_Name)
    }
    depost() { }
    withdran() { }
    get_Statement() { }
    get_Balance() {
        //console.log("Your Balance : ",this.account_sal)
        console.log(`Your Balance is: ${this.account_sal}`)
    }
    close_Account() { }
}
let s1 = new Savings(101, "Rahul", 45000)
s1.open_Account()
s1.get_Balance()