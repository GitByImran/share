const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: false,
  },
  image: {
    type: String,
    default: "",
    required: false,
  },
  registered: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("Users", userSchema);

export default UserModel;
