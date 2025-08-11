const express = require('express');
const router = require('./router/router.js');
const cors=require('cors');
const { CheckSalayrs } = require('./middleware/Check.js');
const { usersDataValidation } = require('./middleware/Validation.js');
const mongoose = require('mongoose');
const app = express();
const UserModel = require('./model/UserModel');//
const StudentModel = require('./model/StudentsModel.js');

// mongoose.connect('mongodb://localhost/school',
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     }
// )
// .then(()=>{
//     console.log("Connected to MongoDB")
// })
// .catch((err)=>{
//     console.error("MongoDB connection error:", err);
// }
// );





mongoose.connect('mongodb://localhost/users', //انشاء اتصال بقاعدة البيانات
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }
).then(() => {
    console.log('MongoDb Connected');}
).catch((err) => {
    console.error(err);
});




app.use(cors());
app.use(express.urlencoded({extended:true}))




// app.use(CheckSalayrs)
//  app.use(usersDataValidation)
app.use(router)
app.listen(3000,()=>{
    console.log("listening on port 3000")
});