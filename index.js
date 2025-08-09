const express = require('express');
const router = require('./router/router.js');
const cors=require('cors');
const { CheckSalayrs } = require('./middleware/Check.js');
const { usersDataValidation } = require('./middleware/Validation.js');

const mongoose = require('mongoose');
const app = express();
const UserModel = require('./model/UserModel');//
////
const StudentModel = require('./model/StudentsModel.js');
mongoose.connect('mongodb://localhost/school',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
.then(()=>{
    console.log("Connected to MongoDB")
})
.catch((err)=>{
    console.error("MongoDB connection error:", err);
}
);

StudentModel.create({
    id:1001,
    name: "Abdulrahim",
    age: 20,
    subjects: ["math","physics"],
    phone:"09255405",
}).then((data) => {
    console.log("Student created:", data);
}).catch((err) => {
    console.error("Error creating student:", err);
});

StudentModel.create({
    id:1002,
    name: "ahmed",
    age: 20,
    subjects: ["JavaScript","java"],
    phone:"0925650",
}).then((data) => {
    console.log("Student created:", data);
}).catch((err) => {
    console.error("Error creating student:", err);
});

////
StudentModel.find({
    
    subjects: "JavaScript"
    
})
.then((data) => {
    console.log("Found students:", data);
})
.catch((err) => {
    console.error("Error finding students:", err);
});

StudentModel.deleteMany({})
.then(()=>{
    console.log("all students deleted");
})
.catch(()=>{
    console.log("error de")
})




// mongoose.connect('mongodb://localhost/users', //انشاء اتصال بقاعدة البيانات
//     {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     }
// ).then(() => {
//     console.log('MongoDb Connected');}
// ).catch((err) => {
//     console.error(err);
// });

// انشاء مستخدم جديد في قاعدة البيانات




// UserModel.find({
//     name: "Abdulrahim"
   
// }).then((data) => {
//     console.log(data);
//     console.log(`WOW I GOT ALL NAME  DATA`)

// }).catch((err) => {
//     console.error(err);
// })
// UserModel.findOne({
//     name: "ahmed"
   
// }).then((data) => {
//     console.log(data);
//     console.log(`WOW I GOT name ${data.name} DATA`)

// }).catch((err) => {
//     console.error(err);
// })


app.use(cors());
app.use(express.urlencoded({extended:true}))




// app.use(CheckSalayrs)
 app.use(usersDataValidation)
app.use(router)
app.listen(3000,()=>{
    console.log("listening on port 3000")
});