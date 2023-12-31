const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    room: {
        type: String
    },
    id: {
        type: String
    }

}, { timestamps: true });


module.exports = mongoose.model("User", userSchema);