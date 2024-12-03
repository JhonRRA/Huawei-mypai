const twilio = require("twilio");
const Chatbot = require("../models/chatbotwsp");

const createChatbotwsp = async (req, res) => {
  const { botName, paymentMethod, apiKey, whatsappNumber, accessToken } = req.body;

  try {
    const newChatbot = new Chatbot({ botName, paymentMethod, apiKey, whatsappNumber, accessToken });
    await newChatbot.save();

    // Configura Twilio
    const client = twilio(apiKey, accessToken);
    await client.messages.create({
      from: `whatsapp:${whatsappNumber}`,
      to: "whatsapp:+CLIENT_NUMBER", // Cambiar por el número del cliente
      body: `¡Hola! Soy ${botName}, tu asistente. ¿Cómo puedo ayudarte hoy?`,
    });

    res.status(201).json({ message: "Chatbot creado con éxito", data: newChatbot });
  } catch (err) {
    res.status(500).json({ message: "Error al crear el chatbot", error: err.message });
  }
};

module.exports = { createChatbotwsp };
