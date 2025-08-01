const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email:{
        type: String,
        required: true,
    },
});

UserSchema.plugin(passportLocalMongoose); //passport-local-mongoose adds username and password fields automatically.

module.exports = mongoose.model('User', UserSchema);