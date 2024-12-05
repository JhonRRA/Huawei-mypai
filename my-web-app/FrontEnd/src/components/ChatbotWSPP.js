import React, { useState } from "react";
import "../styles/ChatbotWSPP.css";

const ChatbotWSPP = () => {
  const [botName, setBotName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const [apiKey, setApiKey] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { botName, paymentMethod, apiKey, whatsappNumber, accessToken };

    try {
        const response = await fetch("http://<YOUR_IP_OR_DOMAIN>:3000/create-bot", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error("Error creating the chatbot.");
        }
        alert("Chatbot created successfully!");
    } catch (err) {
        console.error(err);
        alert("There was a problem creating the chatbot.");
    }
};


  return (
    <div className="chatbot-config">
      <h1>Chatbot Settings</h1>
      <form onSubmit={handleSubmit} className="chatbot-form">
        <label>
          Bot Name:
          <input
            type="text"
            value={botName}
            onChange={(e) => setBotName(e.target.value)}
            placeholder="Enter the chatbot name"
            required
          />
        </label>
        <label>
          Payment Method:
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="paypal">PayPal</option>
            <option value="stripe">Stripe</option>
            <option value="mercadopago">MercadoPago</option>
          </select>
        </label>
        <label>
          API Key:
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter the API Key"
            required
          />
        </label>
        <label>
          WhatsApp Number:
          <input
            type="text"
            value={whatsappNumber}
            onChange={(e) => setWhatsappNumber(e.target.value)}
            placeholder="Example: +1234567890"
            required
          />
        </label>
        <label>
          API Access Token:
          <input
            type="text"
            value={accessToken}
            onChange={(e) => setAccessToken(e.target.value)}
            placeholder="Enter the Access Token"
            required
          />
        </label>
        <button type="submit">Create Chatbot</button>
      </form>
    </div>
  );
};

export default ChatbotWSPP;
