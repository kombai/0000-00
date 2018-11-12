// app/models/user.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    fullName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    birthDay: Number,
    facebookId: String,
    phoneNumber: String
});

module.exports = mongoose.model('user', UserSchema);
