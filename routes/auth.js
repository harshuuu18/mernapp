const { Router } = require('express')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const { ESRCH } = require('constants')
const {JWT_SECRET} = require('../config/key')

router.get('/', (req, res) => {
    res.send("hello")
})

router.post('/signup', (req, res) => {
    const { name, email, password, year, gender } = req.body
    if (!email || !password || !name) {
        return res.status(422).json({error : "Please fill all the details"})
    }
    User.findOne({email:email})
        .then((savedUser) => {
            if (savedUser) {
            return res.status(422).json({error: "User Already Existed"})
            }
            hashpassword = bcrypt.hash(password,10)
                .then(hashpassword => {
                    const user = new User({
                        name,
                        email,
                        password:hashpassword,
                        year,
                        gender
                })

                    user.save()
                        .then(user => {
                        res.json({message: "user saved successfully"})
                    })
                        .catch(err => {
                        console.log(err)
                    })
            })
        })
        .catch(err => {
        console.log(err)
    })
})

router.post('/login', (req, res) => {
    const {email, password} = req.body
    
    if (!email || !password) {
        return res.status(422).json({error: "Please enter your email & Password"})
    }
    User.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
            return res.status(422).json({error: "Wrong email or password"})
            }
            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                        const { _id, name, email, year, gender } = savedUser
                        res.json({token,user:{_id,name,email,year,gender}})
                    } else {
                        return res.status(422).json({error: "wrong email & password"})
                    }
                    
                })
                .catch((err) => {
                console.log(err);
            })
    })
})






module.exports = router