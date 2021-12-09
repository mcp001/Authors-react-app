const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({

    authorName: {
        type: String,
        required: [true, "Must have a name entered!"],
        minLength: [3, "Must be at least 3 characters!"]
        //min: if number
    }

}, {timestamps: true})

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;