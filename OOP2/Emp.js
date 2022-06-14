class Emp {
    constructor(id, name, sal) {
        this.eid = id
        this.ename = name
        this.esal = sal
    }
    get_Details() {
        console.log("Employee Name:", this.ename)
    }
}
let e1 = new Emp(101, "Rahul", 45000)
e1.get_Details()