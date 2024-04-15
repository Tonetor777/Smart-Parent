import  { useState, useEffect } from "react";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button } from "@mui/material";
import ResourceCard from "./ResourceCard";
import AdminNav from "../../../components/AdminNav";

const Resources = () => {
  const [resource, setResource] = useState({
    title: "",
    grade: 0,
    subject: 0,
    file: null,
  });

  const [grades, setGrades] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [resources, setResources] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchGrades = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/grades/");
      setGrades(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSubjects = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/subjects/");
      setSubjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchResources = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/resource/");
      setResources(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch grades and subjects on component mount
  useEffect(() => {
    fetchGrades();
    fetchSubjects();
    fetchResources();
  }, [resources]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setResource({ ...resource, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setResource({ ...resource, file });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", resource.title);
    formData.append("grade", resource.grade);
    formData.append("subject", resource.subject);
    formData.append("file", resource.file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/resource/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      console.log("Resource created successfully:", response.data);
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const downloadResource = async (resourceId, resourceTitle) => {
    try {
      const downloadUrl = `http://127.0.0.1:8000/api/resource/${resourceId}/download/`;
      const response = await axios.get(downloadUrl, {
        responseType: "blob",
      });

      const blob = new Blob([response.data], { type: response.data.type });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", resourceTitle);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <AdminNav/>
    <div className="w-full h-auto bg-gray-100 min-h-screen text-gray-800 text-customText font-sans " >
        <div className="shadow mb-5">
      <Button
        onClick={() => setShowModal(true)}
        aria-label="medium sizes"
        sx={{
          height: "35px",
          backgroundColor: "#0349fc",
          color: "white",
          padding: "10px",
          margin: "5px 20px",
          ":hover": {
            backgroundColor: "#0736ad",
          },
        }}
      >
        Add Resource
      </Button> *

      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h2 className="text-xl font-bold mb-4 text-center text-blue-800">
              Add Resource
            </h2>
            <form>
              <div className="space-y-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter the title of the book"
                  value={resource.title}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-10 p-2 border"
                />

                <label
                  htmlFor="grade"
                  className="block text-sm font-medium text-gray-700"
                >
                  Grade:
                </label>
                <select
                  id="grade"
                  name="grade"
                  value={resource.grade}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">Select Grade</option>
                  {grades.map((grade) => (
                    <option key={grade.id} value={grade.id}>
                      {grade.grade}
                    </option>
                  ))}
                </select>

                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject:
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={resource.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">Select Subject</option>
                  {subjects.map((subject) => (
                    <option key={subject.id} value={subject.id}>
                      {subject.subject}
                    </option>
                  ))}
                </select>

                <label
                  htmlFor="file"
                  className="block text-sm font-medium text-gray-700"
                >
                  File:
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleFileChange}
                  required
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />

                <div className="flex justify-between items-center space-x-2">
                  <button
                    type="button"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    onClick={() => setShowModal(false)}
                  >
                    <CancelIcon /> Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={handleSubmit}
                  >
                    <AddIcon /> Add Resource
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )} 

      <h2 className="text-center font-bold text-2xl text-blue-600 pb-4    ">
        Resources
      </h2>
    </div> 

      {resources.length > 0 ? (
        <div>
            <ResourceCard resources={resources} downloadResource={downloadResource} />
        
        </div>
      
      ) : (
        <p>No resources found.</p>
      )}
    </div>
    </>
  );
};

export default Resources;
