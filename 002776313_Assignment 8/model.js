const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      const fullNameValidator = /^[a-zA-Z ]*$/;
      if (!fullNameValidator.test(value)) {
        throw new Error("Full Name is invalid");
      }
    },
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate(value) {
      const passvalidate =
        /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/;
      if (value?.toLowerCase()?.includes("password")) {
        throw new Error("Password cannot contain password");
      } else if (!passvalidate.test(value)) {
        throw new Error("Password failed strong validation");
      }
    },
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

userSchema.statics.findByCredentials = async (email) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to find any user");
  }
  return user;
};
// userSchema.pre("remove", async function (next) {
//   const user = this;
//   await Task.deleteMany({ owner: user._id });
//   next();
// });

const User = mongoose.model("User", userSchema);

module.exports = User;
