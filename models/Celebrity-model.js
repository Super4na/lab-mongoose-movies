const mongoose = require("mongoose");

const celebritySchema = mongoose.Schema(
  {
    name: String,
    occupation: {
      type: String,
      enum: ["singer", "actor", "comedian", "unknown"],
    },
    catchPhrase: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Celebrity", celebritySchema);
