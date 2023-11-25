const mongoose = require("mongoose");

const UserDataSchema = new mongoose.Schema({
  profile: {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    image: {
      type: String,
    },
    profession: {
      type: String,
    },

    workplace: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  socialLinks: {
    linkedin: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    website: {
      type: String,
    },
  },
  followers: [String],
});

const UserDataModel = mongoose.model("UserData", UserDataSchema);

export default UserDataModel;
