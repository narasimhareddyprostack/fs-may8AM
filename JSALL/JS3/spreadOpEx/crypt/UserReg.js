const bcryptjs = require('bcryptjs')
let user = { name: 'Rahul Gandhi', password: "IWantPM123", cc: "1234123456785678" }

let salt = bcryptjs.genSaltSync(10)
let new_Password = bcryptjs.hashSync(user.password, salt)

let crypt_user = { ...user, password: new_Password }

let flag = bcryptjs.compareSync("IWantPM123", crypt_user.password)
flag ? console.log("Login Success") : console.log("Login Failure")