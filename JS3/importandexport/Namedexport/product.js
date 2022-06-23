let p_Name = "Iphone 12s"
let price = 45000
class Product {
    constructor() {
        console.log("construcor - method")
    }
    get_Details() {
        console.log("Iphone 12 s info")
    }
}
function get_Product_Details() {
    console.log("Product Details are ::::")
}
//export {p_Name,price,Product,get_Product_Details} - es6
module.exports = { p_Name, price, Product }  //es5