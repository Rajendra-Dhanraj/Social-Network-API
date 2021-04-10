const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: "Username is Required!",
      trim: true,
    },
    email: {
      type: String,
      required: "Email is Required!",
      unique: true,
      match: [/.+@.+\./, "Please fill a valid email address"],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId, //expect an object id from thoughts. Array of _id values referencing the Thought model
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId, //expect an object id from User (Self Reference). Array of _id values referencing the User model (self-reference)
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);



// create the User model using the UserSchema
const User = model("User", UserSchema);

// export the User model
module.exports = User;
