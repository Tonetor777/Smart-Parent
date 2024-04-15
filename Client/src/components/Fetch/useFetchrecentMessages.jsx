import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook for fetching recent messages for a teacher
const useFetchRecentMessages = (teacherId) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // Fetch messages for the teacher. Adjust the query as needed for your API.
        const response = await axios.get(`http://localhost:3001/messages`);
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [teacherId]);

  return { messages, loading };
};

export default useFetchRecentMessages;
