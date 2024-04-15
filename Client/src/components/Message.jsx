import React, { useState } from 'react';
import PropTypes from 'prop-types';
import api from '../api';
import ResponsiveAppBar from './NabBar';
function Message({ message }) {
  const { sender, receiver, message: content } = message;
  const [replying, setReplying] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const formattedDate = new Date(message.date).toLocaleDateString();

  const handleReply = () => {
    setReplying(!replying);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const replyMessage = e.target.elements.message.value;

    const reversedMessage = {
      sender: receiver.user_id,
      receiver: sender.user_id,
      message: replyMessage,
    };

    try {
      const response = await api.post('/send-message/', reversedMessage);

      console.log('Reply sent successfully:', response.data);
      setReplying(false);
      setSuccessMessage('Reply sent successfully');
    } catch (error) {
      console.error('Error sending reply:', error);
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg p-4 mb-4">
      {successMessage && (
        <p className="text-green-500 mb-2">{successMessage}</p>
      )}

      <div className="flex items-center mb-2">
        <img
          className="w-8 h-8 rounded-full mr-2"
          src="https://via.placeholder.com/50"
          alt="Sender's Avatar"
        />
        <div>
          <p className="font-semibold">
            {sender.first_name} {sender.last_name}
          </p>
        </div>
      </div>
      <div className="bg-[#EEEEEE] mb-3">
        <p className="text-gray-800">{content}</p>
        <p className="text-sm text-gray-500 mt-2">{formattedDate}</p>
      </div>

      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md mr-2"
          onClick={handleReply}
        >
          Reply
        </button>
      </div>

      {replying && (
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            name="message"
            className="border border-gray-300 rounded-md p-2 w-full mt-2"
            placeholder="Type your reply here..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md mt-2"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.shape({
      user_id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      phone_number: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }).isRequired,
    receiver: PropTypes.shape({
      user_id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      phone_number: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }).isRequired,
    message: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Message;
