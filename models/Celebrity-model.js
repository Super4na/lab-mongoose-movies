const mongoose = require("mongoose");

const celebritySchema = mongoose.Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
}, {
    timestamps: true,
});

module.exports = mongoose.model("Celebrity", celebritySchema)