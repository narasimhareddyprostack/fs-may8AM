class Employee {
    eid;
    ename;
    esal;
    constructor(id, name, sal) {
        this.eid = id;
        this.ename = name;
        this.esal = sal
    }
}
let e1 = new Employee(101, "Rahul", 45000)

console.log(e1)
