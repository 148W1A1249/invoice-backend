const admins =  require('../models/admin');

// create 
exports.createStudent = (req, res) =>{
    // console.log(req.body);
    const {email} = req.body;
    admins.findOne({email}).exec((err, user)=>{
        if(user){
            return res.status(200).json({message: "User with this email already exists.",type:"error"})
            // return res.status(400).json({error: "User with this email already exists."})
        }
        let newUser = new admins(req.body);
        newUser.save((err, userData) =>{
            if(err){
                console.log("Error in Create Student: ", err);
                return res.status(400).json({error: err})
            }
            res.json({
                message: "Create Student Success!",
                type:"success"
            })
        })
    });
} 
exports.createManager = (req, res) =>{
    // console.log(req.body);
    const {email} = req.body;
    admins.findOne({email}).exec((err, user)=>{
        if(user){
            return res.status(200).json({message: "User with this email already exists.",type:"error"})
            // return res.status(400).json({error: "User with this email already exists."})
        }
        let newUser = new admins(req.body);
        newUser.save((err, userData) =>{
            if(err){
                console.log("Error in Create Manager: ", err);
                return res.status(400).json({error: err})
            }
            res.json({
                message: "Create Manager Success!",
                type:"success"
            })
        })
    });
} 
exports.createPerminentEmployeer = (req, res) =>{
    // console.log(req.body);
    const {email} = req.body;
    admins.findOne({email}).exec((err, user)=>{
        if(user){
            return res.status(200).json({message: "User with this email already exists.",type:"error"})
            // return res.status(400).json({error: "User with this email already exists."})
        }
        let newUser = new admins(req.body);
        newUser.save((err, userData) =>{
            if(err){
                console.log("Error in Create employee: ", err);
                return res.status(400).json({error: err})
            }
            res.json({
                message: "Create employee Success!",
                type:"success"
            })
        })
    });
} 
exports.creatTemporaryEmployeee = (req, res) =>{
    // console.log(req.body);
    const {email} = req.body;
    admins.findOne({email}).exec((err, user)=>{
        if(user){
            return res.status(200).json({message: "User with this email already exists.",type:"error"})
            // return res.status(400).json({error: "User with this email already exists."})
        }
        let newUser = new admins(req.body);
        newUser.save((err, userData) =>{
            if(err){
                console.log("Error in Create Tempory Employee: ", err);
                return res.status(400).json({error: err})
            }
            res.json({
                message: "Create Tempory Employee Success!",
                type:"success"
            })
        })
    });
} 