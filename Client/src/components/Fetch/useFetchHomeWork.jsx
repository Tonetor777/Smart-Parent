import { useState, useEffect } from "react";
import axios from "axios";

const useFetchHomework = () => {
  const [homework, setHomework] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomework = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/tasks/`);
        const today = new Date().toISOString(); // Current date in ISO format
        console.log("Today's date", today);

        // Filter homework directly from the response data
        const homeworkData = response.data.filter(
          (hw) => hw.type === "homework"
        );
        console.log("All homework", homeworkData);

        // Filter active homework based on today's date
        const activeHomework = homeworkData.filter((hw) => {
          // Check if today's date falls within the homework's active period
          return today >= hw.date && today <= hw.deadline;
        });
        console.log("Active homework", activeHomework);

        // Set both the filtered homework and activeHomework to state
        setHomework(activeHomework);
      } catch (error) {
        console.error("Error fetching homework:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomework();
  }, []);

  return { homework, loading };
};

export default useFetchHomework;
