const mongoose = require("mongoose");

const ChatbotSchema = new mongoose.Schema({
  botName: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  apiKey: { type: String, required: true },
  whatsappNumber: { type: String, required: true },
  accessToken: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Chatbot", ChatbotSchema);
