const router = require("express").Router();

const {
  getAllUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// all user routes
router
.route("/")
.get(getAllUsers)
.post(createUser);

// single user routes

router
.route("/:id")
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);


router
.route("/:userId/friends/:friendId")
.post(addFriend)
.delete(removeFriend)
module.exports = router;

