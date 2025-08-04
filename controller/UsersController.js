exports.loginUsers=(req,res)=>{
    const {username} = req.body;
         res.json({
            msg:`Welcome Back ${username}`,
            data: {
                username: username,
                email: "abdulrahim002@gmail.com",
                age:22, 
                phone: "123456789",
            state:1,
            }
        });
 
    }

 exports.RegisteringUsers=(req,res)=>{
    const{username,email,phone}=req.body;
    res.json({
        msg:`welcome ${username}`,
        data: {
            username:username,
            email: email,
            phone: phone,
        state:1,
 }})}

exports.UsersData =(req,res)=>{
    res.json({
        msg:"Users Data",
        data: ['abdulrahim@gmail','200415','09254545454'],
        state:1,
    })
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

exports.GetAllUsersSalarys = (req, res) => {
    
    res.json({
        state:1,
        data: [200,450,5051,51051],
    })
}