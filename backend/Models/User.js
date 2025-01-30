const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {type:String, unique:true, email:true},
    firstName: String,
    lastName: String,
    password: String,
});


const UserModul = mongoose.model('User', userSchema);


module.exports = UserModul;