exports.loginUsers=(req,res)=>{
    const {username,password} =req.body;
    if(username == "Abdulrahim" && password == "123456"){
        return res.json({
            msg:"welcome to the system",
            state:0,
            
        });
       
    }
    return res.json({
           msg:"error",
           
            state:1
        });
    }


exports.SinUpUsers=(req,res)=>{
     
    const {username,password,email,phone} =req.body;
    if(username.trim() && password.trim() && email.trim() && phone.trim()){
        return res.json({
            msg:"User registered successfully",
            state:0,
            data: {username, email, phone}
        });
    }
else{
        return res.json({
            msg:"Please fill all fields",
            state:1
        });
}
}
