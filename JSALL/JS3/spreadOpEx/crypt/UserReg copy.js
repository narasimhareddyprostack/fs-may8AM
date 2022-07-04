//import bcryptjs from 'bcryptjs'
const bcryptjs = require('bcryptjs')

let user = { name: 'Rahul Gandhi', password: "IWantPM123", cc: "1234123456785678" }
//convert user sensitive data to hashed format   - using bycrptjs 

let salt = bcryptjs.genSaltSync(10)

let new_Password = bcryptjs.hashSync(user.password, salt)
console.log(user.password)
console.log(new_Password)
console.log(user)

let crypt_user = { ...user, password: new_Password }
console.log(user)

let flag = bcryptjs.compareSync("IWantPM123", crypt_user.password)
console.log(flag)

flag ? console.log("Login Success") : console.log("Login Failure")