import axios from "axios";
import React, { useEffect, useState } from "react";

const ChatMessage = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        "https://backendserver-flsp.onrender.com/messages"
      );
      setMessages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const sendMessage = async () => {
    try {
      const response = await axios.post(
        "https://backendserver-flsp.onrender.com/messages",
        {
          user,
          message,
        }
      );
      setMessages([...messages, response.data]);
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white bg-opacity-20 rounded-lg shadow-lg p-6 max-w-md w-full">
        <h1 className="text-3xl mb-4">Chat App</h1>
        <div className="mb-4">
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Enter your name"
            className="rounded-lg w-full bg-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            className="rounded-lg w-full bg-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 mt-2"
          >
            Send
          </button>
        </div>
        <ul className="divide-y divide-gray-300">
          {message &&
            messages.map((msg, index) => (
              <li key={index} className="py-2">
                <strong>{msg.user}</strong>: {msg.message}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatMessage;
