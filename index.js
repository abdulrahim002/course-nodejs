const express = require('express');
const router = require('./router/router.js');
const cors=require('cors');
const { CheckSalayrs } = require('./middleware/Check.js');
const { LoginValidation } = require('./middleware/Validation.js');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}))




// app.use(CheckSalayrs)
app.use(LoginValidation)
app.use(router)
app.listen(3000,()=>{
    console.log("listening on port 3000")
});