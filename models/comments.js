const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema({
  type: Schema.Types.ObjectId,
  name: String,
  ip: String,
  comment: String,

  replies: [
    {
      body: String,
      name: String,
      comment: { body: String, date: Date },
      date: Date,
    },
  ],

  meta: {
    votes: Number,
    favs: Number,
  },

  secretKey: String,

  hidden: Boolean,

  date: { type: Date, default: Date.now },
});

const MainComments = mongoose.model("Comments", Comment);

module.exports = MainComments;
