const express = require("express");
const { createChatbot } = require("../controllers/chatbotwspcontroller");
const router = express.Router();

router.post("/create-bot", createChatbot);

module.exports = router;
