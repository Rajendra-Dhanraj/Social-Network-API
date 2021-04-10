const router = require("express").Router();

const {
  addThought,
  removeThought,
  getAllThoughts,
  getSingleThought,
  updateThought,
} = require("../../controllers/thought-controller");

// /api/thoughts/:userId
router // add thought
  .route("/:userId")
  .post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router //delete thought
  .route("/:userId/:thoughtId")
  .delete(removeThought);

// /api/thoughts/
router // get all thoughts
  .route("/")
  .get(getAllThoughts);

// api/thoughts/<thoughtId>
router // get single thought
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought);

module.exports = router;
