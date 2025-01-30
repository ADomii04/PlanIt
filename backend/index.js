const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGODB)
const Event = require("./Models/Event.js");
const User = require("./Models/User.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");

const app = express();


app.use(bodyParser.json());

app.use(cookieParser())

const bcryptSalt = bcrypt.genSaltSync(10);

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));

//USER////////////////////////////

app.post("/signup", async(req, res) => {
    const {firstName, lastName, email, password} = req.body;
    try {
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password : bcrypt.hashSync(password, bcryptSalt)
        })
        res.json(newUser);
    } catch (error) {
        console.log(error + "Server error during signup")
    }
})

app.post("/signin", async(req, res) => {
    const {email, password} = req.body;
    const foundUser = await User.findOne({email});
    if(foundUser){
        console.log(password + foundUser.password);
        const passwordIsOk = bcrypt.compareSync(password, foundUser.password)
        if(passwordIsOk){
            const token = jwt.sign({ email: foundUser.email, id: foundUser._id }, process.env.HASH);
            res.cookie("token", token, { httpOnly: true, sameSite: 'Lax'}).json({foundUser});
        }
        else{
            console.log("Wrong Password")
        }
    }else
    {
        console.log("User is not found")
    }
})

app.get("/profil", async(req, res) => {

})

/////////////////////////////////



app.listen(4000, () => {
    console.log("Server is running")
})