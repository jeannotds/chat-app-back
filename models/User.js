const mongoose = require('mongoose');
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')


const UserSchema = new mongoose.Schema({
        name: {
            type: String,
            require: [true, "Can't be black"]
        },
        email: {
            type: String,
            lowercase: true,
            unique: true,
            require: [true, "Can't be black"],
            index: true, 
            validate: [isEmail, "invalid email"]
        },
        password: {
            type: String,
            require: [true, "Can't be black"]
        },
        picture: {
            type: String,
        },
        newMessages: {
            type: Object,
            default:{}
        },
        status: {
            type: String,
            default: 'online'
        }, 
    
}, {minimize: false});


const User = model.mongoose('User', UserSchema)

module.exports = User