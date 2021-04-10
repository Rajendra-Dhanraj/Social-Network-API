const router = require("express").Router();

const {
  addThought,
  removeThought,
  getAllThoughts,
  getSingleThought,
  updateThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts/:userId
router
  .route("/:userId")
  .post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router 
  .route("/:userId/:thoughtId")
  .delete(removeThought)

// /api/thoughts/
router 
  .route("/")
  .get(getAllThoughts);

// api/thoughts/<thoughtId>
router 
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought);

router
.route("/:thoughtId/reactions")
.post(addReaction);

router
.route("/:thoughtId/reactions/:reactionId")
.delete(removeReaction);

module.exports = router;
