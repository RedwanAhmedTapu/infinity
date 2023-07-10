import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ChatMessages = (prop) => {
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState("");
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
      setMessages([...messages, response.data.message]);
    } catch (error) {
      console.error(error);
    }
  };
  const handleClick = prop.onClick;
  const sendMessage = async () => {
    try {
      const response = await axios
        .post("https://backendserver-flsp.onrender.com/messages", {
          image,
          user,
          message,
        })
        .then((res) => {
          alert("review given successfully");
        });
      //   setMessages([...messages, response.data]);
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <CloseIcon
        className="relative top-1"
        style={{ fontSize: "3rem" }}
        onClick={handleClick}
      />
      <div className="bg-white bg-opacity-20 rounded-lg shadow-lg p-6 max-w-md w-full">
        <h1 className="text-3xl mb-4">Give A Review </h1>
        <div className="mb-4">
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter your  image"
            className="rounded-lg w-full bg-gray-200 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
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
      </div>
    </div>
  );
};

export default ChatMessages;
