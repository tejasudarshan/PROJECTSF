const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./models/Forms')
const EmployeeModel1 = require('./models/Login')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/Forms");

app.post('/register', (req,res) =>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.post('/login', (req,res) =>{
    const {email, password} = req.body
    EmployeeModel1.create(req.body)
    Login => res.json(Login)
    EmployeeModel.findOne({email: email})
    .then (user => {
        if(user){
            if(user.password === password){
                res.json("Login Success")
                
                
            }else{
                res.json("Incorrect password")
                alert("Incorrect password")
            }
        }else{
            res.json("User doesn't exist")
            alert("User Doesn't Exists")
        }
        alert("Login Success")
    })
})




app.listen(3001, ()=>{
    console.log("server is running")
})
