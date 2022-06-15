class Parent {
    constructor() {
        console.log("Parent Class - constructor:method")
    }
}
class Child extends Parent {
    constructor() {
        super()
        console.log("Child Class - constructor:method")
    }
}
new Child()