const {DBURL,port} = require("../helpers/environment");
const Mongoose = require("mongoose");

// connect to database
const connectDB = new Promise((resolve,reject)=>{
    try {
        Mongoose.connect(DBURL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex: true
        })
        console.log(`::: Database connection established` +DBURL);
        resolve(port);
    } catch (error) {
        console.log(error);
        reject(error);
    }
})

module.exports = {connectDB};