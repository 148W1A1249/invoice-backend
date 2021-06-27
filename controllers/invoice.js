const admins =  require('../models/admin');

// Invoice 
exports.Invoice = (req, res) =>{
    // console.log(req.body);
    const {category} = req.body;
    console.log(req.body)
    admins.find({category}).exec((err, user)=>{
        // console.log(user)
        if(user){
            return res.status(200).json({message: "get data",type:"success",user})
            // return res.status(400).json({error: "User with this email already exists."})
        }else{
            return res.status(200).json({message: "Data Not exit",type:"error"})
        }
        
    });
} 