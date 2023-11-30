const mongoose = require("mongoose");
const moment = require("moment");

const UserPostDataSchema = new mongoose.Schema({
  profile: {
    name: String,
    email: String,
    image: String,
  },
  postBody: {
    title: String,
    content: String,
  },
  postInsights: {
    like: Number,
    dislike: Number,
    share: Number,
  },
  postComments: [
    {
      name: String,
      email: String,
      image: String,
      comment: String,
    },
  ],
  postAbout: {
    postDate: {
      type: String,
    },
  },
});

const UserPostDataModel = mongoose.model("UserPostData", UserPostDataSchema);

export default UserPostDataModel;
