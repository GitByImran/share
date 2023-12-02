const mongoose = require("mongoose");
const moment = require("moment");

const UserPostDataSchema = new mongoose.Schema({
  profile: {
    name: String,
    email: String,
    image: String,
  },
  title: String,
  content: String,
  postDate: String,
  totalViews: Number,
  postLikes: [
    {
      id: String,
      like: Boolean,
    },
  ],
  postComments: [
    {
      name: String,
      email: String,
      comment: String,
    },
  ],
});

const UserPostDataModel = mongoose.model("UserPostData", UserPostDataSchema);

export default UserPostDataModel;
