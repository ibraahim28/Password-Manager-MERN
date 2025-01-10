const mongoose = require('mongoose');

const savedPasswords = new mongoose.Schema({
    user_id : {
        type : String,
        required : true
    },
    site_url : {
        type : String,
        required : true,
    },
    acc_username : {
        type:String,
        required : true,
    },
    acc_password : {
        type : String,
        required : true
    }
})

const savedPassSchema = mongoose.model('savedPasswords', savedPasswords)

module.exports = savedPassSchema;