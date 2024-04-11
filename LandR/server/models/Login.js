const mongoose = require('mongoose')

/*employee schema is exported*/
const EmployeeSchema1 = new mongoose.Schema({
    email: String,
    password: String
})

const EmployeeModel1 = mongoose.model("Login", EmployeeSchema1)
module.exports = EmployeeModel1
