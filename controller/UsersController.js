const UsersModel = require('../model/UserModel.js');





exports.create = async (req , res)=>{
    const {name, email, password} = req.body;
    await UsersModel.create({
        name: name,
        email: email,
        password:password,
})
    .then((user)=>{
        res.status(200).json({
            msg: "User created successfully",
            state: 200,
            data: user,
        })})
    .catch((err)=>{
        res.status(400).json({
            msg: "internal server error",
            state: 400,
            error: err.message,
           
        });
    })}
    



exports.find = async (req, res) =>{

    await UsersModel.find({
        name: req.params.name,
    })
    .then((user) => {
        if(user.length === 0){
        return res.json({
            msg: "User not found",
            state: 404,
        })
    }
    res.status(200).json({
        msg: "Users found successfully",
        state: 200,
        data: user,
    })

    }).catch((err) => {
   res.status(400).json({
        msg: "internal server error",
        state: 400,
        
    } );
})
}



exports.findOne =async (req, res)=>{
    
   await UsersModel.findOne({
   name: req.params.name,
    })
    
    .then((user) =>
         {if(user === null){
        return res.json({
            msg: "User not found",
            state: 404,
        })
    }
    res.status(200).json({
        msg: "User found successfully",
        state: 200,
        data:user,
    })
    })
    .catch((err) => {
         res.status(400).json({
            msg: "internal server error",
            state: 400,
        error: err.message,
           
        });
    
})
};






// exports.create = (req, res) => {
//   const { name, email, password } = req.body;

// if (!name || !email || !password) {
//     return res.status(400).json({
//       msg: "All fields are required",
//       state: 400,
//     });
//   }

//   UsersModel.create({
//     name: name,
//     email: email,
//     password: password,
//   })
//     .then(() => {
//       res.status(200).json({
//         msg: "User created successfully",
//         state: 200,
//       });
//     })
//     .catch((err) => {
//       res.status(4001).json({
//         msg: "Error creating user",
//         state: 4001,
//         error: err.message,
//       });
//     });
// };