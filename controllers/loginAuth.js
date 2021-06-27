const admins = require('../models/admin');

exports.loginAuth = async (req, res)=>{
    // const data =  await admins.find();
    // console.log(data)
    const {email,password,category} = req.body;
    // console.log(req.body)
    admins.findOne({email}).exec((err, user)=>{
        // console.log(user)
        if(user){
            if(email === user.email && password === user.password && category === user.category && category ==="Admin"){
                return res.status(200).json({message: "logined as Admin Successfully",type:"success",category,user})
            }else if(email === user.email && password === user.password && category === user.category  && category ==="Manager"){
                return res.status(200).json({message: "logined as manager Successfully",type:"success",category,user})
            }
            else if(email === user.email && password === user.password && category === user.category  && category ==="EP"){
                return res.status(200).json({message: "logined as Employe Successfully",type:"success",category,user})
            }
            else if(email === user.email && password === user.password && category === user.category  && category ==="ENP"){
                return res.status(200).json({message: "logined as Guest Successfully",type:"success",category,user})
            }
            else if(email === user.email && password === user.password && category === user.category  && category ==="student"){
               return res.status(200).json({message: "logined as User Successfully",type:"success",category,user})
            }
            else{
                // return res.status(401).json({error: "login details are incorrect"})
                return res.status(200).json({message: "login details are incorrect",type:"error"})
            }
        }
        else{
            return res.status(200).json({message: "login details are incorrect",type:"error"})
        }
    });
 }

// exports.loginAuth=(req,res)=>{
//     const {email,password,category} = req.body;
//     console.log(req.body)
//     console.log(admin)

//     admin.findOne({email}).exec((err, user)=>{
//         console.log(user)
//         return res.status(200).json({message: "logined Successfully",type:"success"})
//         if(password === user.password){
//             return res.status(200).json({message: "logined Successfully",type:"success"})
//         }else{
//             // return res.status(401).json({error: "login details are incorrect"})
//             return res.status(200).json({message: "login details are incorrect",type:"error"})
//         }
//     });
// }