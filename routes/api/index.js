const router = require("express").Router();
const userRoutes = require("./user-routes");
// const thoughts Routes goes here

router.use("/users", userRoutes);
// router thoughts goes here

module.exports = router;
