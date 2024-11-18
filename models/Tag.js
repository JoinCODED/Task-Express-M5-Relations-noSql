const { model, Schema } = require("mongoose");

const TagSchema = new Schema({
  name: { type: String, unique: true },
  postat: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

module.exports = model("Tag", TagSchema);
