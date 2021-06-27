const mongoose = require('mongoose');

// user schema
const adminSchema = new mongoose.Schema({
    category:{
        type: String,
        required: true,
    },
    firstName:{
        type: String,
    },
    lastName:{
        type: String,
    },
    email:{
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
    },
    mobile:{
        type: Number,
        min: 10,
    },
    address:{
        type: String,
    },
    state:{
        type: String,
    },
    pincode:{
        type: Number,
    },
    country:{
        type: String,
    },
    fees:{
        type: Number,
    },
    paid:{
        type: String,
    },
    dateOfJoining:{
        type: String,
    },
    
},{timestamp: true})

module.exports = mongoose.model('admin',adminSchema);