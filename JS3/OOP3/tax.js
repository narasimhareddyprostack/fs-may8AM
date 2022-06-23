class P {
    get_Details = () => {
        console.log("GM")
    }
}
class C extends P {
    get_Details = () => {
        console.log("GN")
    }
}
let obj1 = new C();
obj1.get_Details()