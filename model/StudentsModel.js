const mongoose = require('mongoose');
const StudentsSchema= require('../schema/Students');

const Student=mongoose.model('students',StudentsSchema);

module.exports=Student;