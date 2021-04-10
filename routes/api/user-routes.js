const router = require("express").Router();

const {
  getAllUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");
// const { update } = require("../../models/User");

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

module.exports = router;

