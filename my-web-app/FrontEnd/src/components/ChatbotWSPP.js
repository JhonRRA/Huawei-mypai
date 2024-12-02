import React, { useState } from "react";
import "../styles/ChatbotWSPP.css";

const ChatbotWSPP = () => {
  const [botName, setBotName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const [apiKey, setApiKey] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log({
      botName,
      paymentMethod,
      apiKey,
      whatsappNumber,
      accessToken,
    });
    alert("Chatbot creado con éxito!");
  };

  return (
    <div className="chatbot-config">
      <h1>Configuración del Chatbot</h1>
      <form onSubmit={handleSubmit} className="chatbot-form">
        <label>
          Nombre del Bot:
          <input
            type="text"
            value={botName}
            onChange={(e) => setBotName(e.target.value)}
            placeholder="Ingrese el nombre del chatbot"
            required
          />
        </label>
        <label>
          Método de Pago:
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
            placeholder="Ingrese la API Key"
            required
          />
        </label>
        <label>
          Número de WhatsApp:
          <input
            type="text"
            value={whatsappNumber}
            onChange={(e) => setWhatsappNumber(e.target.value)}
            placeholder="Ejemplo: +1234567890"
            required
          />
        </label>
        <label>
          API Access Token:
          <input
            type="text"
            value={accessToken}
            onChange={(e) => setAccessToken(e.target.value)}
            placeholder="Ingrese el Access Token"
            required
          />
        </label>
        <button type="submit">Crear Chatbot</button>
      </form>
    </div>
  );
};

export default ChatbotWSPP;
