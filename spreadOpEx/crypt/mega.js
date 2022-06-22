const bcryptjs = require('bcryptjs')
let user = { name: 'Rahul Gandhi', password: "IWantPM123", cc: "1234123456785678" }



let salt = bcryptjs.genSalt(10)
let new_Password = bcryptjs.hash(user.password, salt)

let crypt_user = { ...user, password: new_Password }

let flag = bcryptjs.compare("IWantPM123", crypt_user.password)
flag ? console.log("Login Success....") : console.log("Login Failure")
