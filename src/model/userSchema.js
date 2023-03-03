const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type :String,
        required : true,
        trim: true
    },

    email:{
        type:String,
        required:true,
        unique:true,
    },

    phone:{
        type : Number,
        unique:true,
        required:true
    },

    gender:{
        type: String,
        enum: ['male','female']
    },

},{timestamps: true});

const user = mongoose.model('user',userSchema);
 
module.exports = user