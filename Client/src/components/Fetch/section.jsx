import { useState, useEffect } from "react";
import axios from "axios";
import TeacherHomePage from "../../pages/Teacher/Home/TeacherHomePage";

const useFetchSections = () => {
  const id = localStorage.getItem("user_id");
  const [sections, setSections] = useState([]);
  // const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const fetchTeacherInfo = async () => {
    //   try {
    //     const res = await axios.get(`http://localhost:8000/api/teachers/?id=${id}`);
    //     console.log("teacher info", res.data);
    //     const teacherId = res.data[0].id;
    //     setTeacher(teacherId);
    //   } catch (error) {
    //     console.error("Error fetching teacher info:", error);
    //     setLoading(false);
    //   }
    // };

    // const fetchSections = async () => {
    //   try {
    //     if (!teacher) {
    //       // Wait for teacher info to be fetched
    //       return;
    //     }
    //     const response = await axios.get(`http://localhost:8000/api/class-subjects/?id=${teacher}`);
    //     setSections(response.data);
    //   } catch (error) {
    //     console.error("Error fetching sections:", error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    fetchTeacherInfo();
    fetchSections();
  }, [teacher]); // Fetch sections whenever teacher info changes

  return { sections, loading };
};

export default useFetchSections;
