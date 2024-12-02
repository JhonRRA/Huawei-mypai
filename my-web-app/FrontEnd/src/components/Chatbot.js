import React, { useState } from "react";
import axios from "axios";
import "../styles/Chatbot.css"; // Importando el archivo CSS

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { text: input, user: true }]);
    setInput("");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "text-davinci-003",
          prompt: input,
          max_tokens: 100,
        },
        {
          headers: {
            Authorization: `Bearer YOUR_API_KEY`,
          },
        }
      );
      setMessages((prev) => [...prev, { text: response.data.choices[0].text }]);
    } catch (error) {
      setMessages((prev) => [...prev, { text: "Error al obtener respuesta." }]);
    }
  };

  return (
    <div className="chatbot-container">
      <h1 className="chatbot-title">Chatbot</h1>
      <div className="chatbot-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.user ? "user-message" : "bot-message"}`}
          >
            <p className="message-text">{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje"
          className="input"
        />
        <button onClick={handleSend} className="send-button">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
