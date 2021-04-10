const router = require("express").Router();

const {
  addThought,
  removeThought,
  getAllThoughts,
  getSingleThought,
  updateThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller"); // functions imported from controller.

// /api/thoughts/:userId
router
  .route("/:userId")
  .post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router 
  .route("/:userId/:thoughtId") // remove thought from user
  .delete(removeThought)

// /api/thoughts/
router 
  .route("/") // get all thoughts
  .get(getAllThoughts);

// api/thoughts/<thoughtId>
router 
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought);

router
.route("/:thoughtId/reactions") //add reaction to thought
.post(addReaction);

router
.route("/:thoughtId/reactions/:reactionId") // remove reaction from thought
.delete(removeReaction);

module.exports = router;
