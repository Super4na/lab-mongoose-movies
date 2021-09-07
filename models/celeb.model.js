const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const celebSchema = new Schema({
 name: String,
 occupation: String,
 catchPhrase: String,
},
{
  timestamps: true,
}
);

const Celeb = model("celebrities", celebSchema);

module.exports = Celeb;
