const router = require("express").Router();
const messageController = require("../../controllers/messageController");

// Matches with "/api/message"
router.route("/")
  .post(messageController.create);


module.exports = router;
