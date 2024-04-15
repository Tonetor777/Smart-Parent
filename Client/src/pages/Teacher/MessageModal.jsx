import React, { useState } from "react";
import api from "../../api";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Chat from "./Chat"

function MessageModal({ isOpen, onClose, parentId, senderId }) {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleMessageSend = async () => {
    try {
      const response = await api.post("/send-message/", {
        sender: senderId,
        receiver: parentId,
        message: message,
      });
      setSuccessMessage(response.data.message);
      navigate(`/chat/${parentId}`);
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"}`}
    >
      <div
        className="absolute bg-gray-900 opacity-50 inset-0"
        onClick={onClose}
      ></div>
      <div className="z-50 bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Send Message</h2>
        <textarea
          className="border border-gray-300 rounded-md p-2 w-full mb-4"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errorMessage && (
          <div className="text-red-500 mb-4">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="text-green-500 mb-4">{successMessage}</div>
        )}
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white rounded-md px-4 py-2 mr-2 hover:bg-blue-700"
            onClick={handleMessageSend}
          >
            Send
          </button>
          <button
            className="bg-gray-300 text-gray-700 rounded-md px-4 py-2 hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

MessageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  parentId: PropTypes.number.isRequired,
  senderId: PropTypes.number.isRequired,
};
export default MessageModal;
