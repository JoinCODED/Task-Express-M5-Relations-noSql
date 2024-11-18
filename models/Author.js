const { model, Schema } = require("mongoose");

const AuthorSchema = new Schema({
  name: String,
  postat: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

module.exports = model("Author", AuthorSchema);
