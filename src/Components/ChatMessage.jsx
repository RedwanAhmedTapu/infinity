import React, { useEffect, useState } from "react";

function ChatMessage() {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch(
        "https://backendserver-flsp.onrender.com/messages"
      );
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error(error);
    }
  };

  const sendMessage = async () => {
    try {
      const response = await fetch(
        "https://backendserver-flsp.onrender.com/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user, message }),
        }
      );
      const data = await response.json();
      setMessages([...messages, data]);
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Chat App</h1>
      <div>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            <strong>{msg.user}</strong>: {msg.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatMessage;
