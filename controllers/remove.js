const admins =  require('../models/admin');

// remove 
exports.Remove = (req, res) =>{
    // console.log(req.body);
    const {email,category} = req.body;
    // console.log(req.body)
    admins.findOne({email}).exec((err, user)=>{       
       if(user){
           if(user.category === category){
               admins.deleteOne({email}).exec((err, user)=>{
                if(err){
                    console.log("Error in removing person: ", err);
                    return res.status(200).json({message: "Remove not Done!",type:"error"})
                }
                res.status(200).json({message: "Person Removed",type:"success"})
               })
           }else{
            return res.status(200).json({message: "Email id not exit with given category",type:"error"})
           }
       }else{
        return res.status(200).json({message: "Email id not exit",type:"error"})
       }
        
    });
} 