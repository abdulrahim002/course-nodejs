const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const StudentsSchema = new Schema({
    id:{
        type:Number,
    },
    name:{
        type:String,
    },
    age:{
        type:Number,
    },
    subjects:{
        type:[String],
    },
    phone:{
        type:String,
    }
})
module.exports=StudentsSchema;