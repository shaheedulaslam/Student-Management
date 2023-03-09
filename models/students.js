const mongoose = require('mongoose')
const studentSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    StartedDate:{
        type:Date, 
    },
    EndedDate:{
        type:Date,
    }
})
const studentsmodel = mongoose.model('students',studentSchema)
module.exports = studentsmodel