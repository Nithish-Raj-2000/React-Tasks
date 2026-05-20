import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim() === "") return;

    setMessages([...messages, message]);

    setMessage("");
  };

  return (
    <div className="chat-app">
      <div className="chat-container">
        <h1>Mini Chat App</h1>

        <div className="input-section">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button onClick={handleSend}>
            Send Message
          </button>
        </div>

        <div className="messages-container">
          {messages.map((msg, index) => (
            <div className="message" key={index}>
              {msg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;