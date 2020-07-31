const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
        employeeid : { type : String,required : true, unique : true,trim : true, minlength : 5 },
        firstname : { type : String, required : true},
        lastname : { type : String, required : true},
        email : { 
            type: String, 
            lowercase: true, 
            required: [true, "invalid email"], 
            match: [/\S+@\S+\.\S+/, 'is invalid'], 
            index: true, 
            unique:true
        },
        department: {type : String },
        isactive : {type: Boolean, default : true}
    }, {
    timestamps: true,
});

const Employee = mongoose.model('Employee',employeeSchema);

module.exports = Employee;