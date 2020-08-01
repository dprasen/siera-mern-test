const bcrypt = require('bcrypt')

let passwd = bcrypt.hashSync('admin',9);


console.log(passwd);
//$2b$09$exk0glVMEO4Ls4BzvuZnWusWDhLKUZsvqb7qlh3Q11wd1keEZjt.a