const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let userSchema = new Schema({
        username : {
            type:String, 
            required:true,
            unique: true,
            trim: true,
            minlength: 5
        },
        password : {
            type : String,
            required:true
        },
        employee : {
            type : Schema.Types.ObjectId,
            ref : "Employee"            
        },
        roles : {
            type : String,
            required:true
        }
    }, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;