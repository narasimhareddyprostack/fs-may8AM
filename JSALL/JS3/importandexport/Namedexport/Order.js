//import {} from './product'  //es6
const { p_Name, price, Product } = require('./product')
console.log(p_Name)
console.log(price)
let p1 = new Product()   //creating object for Product Class
p1.get_Details()