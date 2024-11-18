const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  title: String,
  body: String,
  alkatib: { type: Schema.Types.ObjectId, ref: "Author" },
  tamqat: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
});

module.exports = model("Post", PostSchema);
