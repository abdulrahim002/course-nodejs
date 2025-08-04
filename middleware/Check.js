
exports.CheckSalayrs =(rqe , res , next)=>{
    const {name} = rqe.body;
    if(name === 'Abdulrahim'){
       next();
        return 
    }
    res.json({
        msg:"انت غير مصرح لك",
        state:1
    });
}
