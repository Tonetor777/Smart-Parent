import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
// import useCurrentTeacherId from "./useCurrentTeacherId";

const useFetchAssignments = () => {
      const {user}= useContext(AuthContext);
      console.log("user in as",user);
      
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  // const teacherId = useCurrentTeacherId();

  useEffect(
    () => {
      // if (!teacherId) {
      //   setLoading(false);
      //   return;
      // }


      const fetchAssignments = async () => {
        try {
          // Replace the URL with your actual endpoint and uncomment the teacherId part if needed
          const response = await axios.get(`http://localhost:8000/api/tasks/`);
          const today = new Date();
          const oneWeekAgo = new Date(today.setDate(today.getDate() - 7));
                 setAssignments(response.data);
                 
                 const assignmentData = response.data.filter(
                  (assignments) => assignments.type === "assignment"
                );
                // console.log(assignmentData)
          const recentAssignments = assignmentData.filter((assignmentData) => {
            const dueDate = new Date(assignmentData.deadline);
            return dueDate >= oneWeekAgo;
          });

          const sortedAssignments = recentAssignments.sort(
            (a, b) => new Date(b.deadline) - new Date(a.deadline)
          );
            // console.log(sortedAssignments)
          setAssignments(sortedAssignments);
        } catch (error) {
          console.error("Error fetching assignments:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchAssignments();
    },
    [
      /* teacherId */
    ]
  );

  return { assignments, loading };
};

export default useFetchAssignments;
