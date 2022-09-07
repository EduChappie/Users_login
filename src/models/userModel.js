const mongoose = require("mongoose");

// criação de um schema, um objeto, que vai ta definido
//  o que iremos utilizar e como utilizaremos
const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("usuairo", userSchema);

