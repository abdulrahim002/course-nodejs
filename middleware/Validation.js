

exports.LoginValidation = (req,res,next)=>{
const{username,password}=req.body;
if(username === "Abdulrahim" && password === "123456"){
next();
return
}
return res.json({
    msg:"اسم المستخدم او كلمة المرور غير صحيحة",
    state:0
});
}





exports.RegisteringValidation = (req,res,next) => {
    const{username,password,email,phone}=req.body;
if(username  && password && email && phone){
    next();
    return;
}
 res.json({
        msg:"الرجاء ملئ جميع الحقول",
        state:0,
       
    });
}

exports.usersDataValidation =(req,res,next)=>{

    const {username,password}=req.body;
    if(username ==="Abdulrahim" && password === "123456"){
        next();
        return;
    }
    res.status(401).json({
    msg:"انت غير مصرح لك",
    
    }
    )
    
    
}
