import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Box, Typography, FormControl } from "@mui/material"; // Import Typography component from MUI

import axios from "axios";
import AdminNav from "../../../components/AdminNav";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "first_name", headerName: "First Name", width: 150 },
  { field: "last_name", headerName: "Last Name", width: 150 },
  { field: "gender", headerName: "Gender", width: 90 },
  { field: "grade", headerName: "Grade", width: 90 },
  { field: "section", headerName: "Section", width: 90 },
  { field: "roll_number", headerName: "Roll Number", width: 120 },
];

const Students = () => {
  const [rows, setRows] = useState([]);
  const [openStudentForm, setOpenStudentForm] = useState(false);
  const [newStudent, setNewStudent] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    roll_number: "",
    grade: "",
    section: "",
  });

  const [grades, setGrades] = useState([]);
  console.log("New Student", grades);
  // Function to handle opening the student form
  const handleOpenStudentForm = () => setOpenStudentForm(true);

  // Function to handle closing the student form
  const handleClose = () => setOpenStudentForm(false);

  // Function to handle adding a new student
  const handleAddStudent = () => {
    // Check if all fields are filled
    if (
      !newStudent.first_name ||
      !newStudent.last_name ||
      !newStudent.gender ||
      !newStudent.roll_number ||
      !newStudent.grade ||
      !newStudent.section
    ) {
      alert("All fields are required.");
      return;
    }

    // Check if roll number is positive
    if (newStudent.roll_number <= 0) {
      alert("Roll number should be a positive integer.");
      return;
    }

    // Add new student
    axios
      .post("http://127.0.0.1:8000/api/student/", newStudent)
      .then((response) => {
        console.log("Student added successfully:", response.data);
        alert("New student added successfully!");
        handleClose();
        // Reset newStudent state after adding a new student
        setNewStudent((prevState) => ({
          ...prevState,
          first_name: "",
          last_name: "",
          gender: "",
          roll_number: "",
          grade: "",
          section: "",

  
        }));
      })
      .catch((error) => {
        console.error("Error adding student:", error);
        alert("An error occurred while adding the student.");
      });
  };

  // Fetch students data when component mounts
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/student/")
      .then((res) => {
        console.log(res.data);
        setRows(res.data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });

    // // Reset newStudent state after fetching rows
    // setNewStudent({
    //   first_name: "",
    //   last_name: "",
    //   gender: "",
    //   roll_number: "",
    //   grade: "",
    //   section: "",
    // });
  }, [newStudent]);

  // Fetch sections data when component mounts
  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/grades/");
        console.log("Grades", res.data);
        setGrades(res.data);
      } catch (error) {
        console.error("Error fetching Grades:", error);
      }
    };
    fetchGrades();
  }, []);

  return (
    <section className="flex flex-col items-center">
  <AdminNav/>

      <Box
        margin="20px"
        height="calc(100vh - 40px)"
        width="calc(100vw - 40px)"
        sx={{ fontWeight: 600 }}
      >
        <h1 className="text-center font-bold text-lg">Manage Student List</h1>
        <Box sx={{ p: 2, backgroundColor: "#f0f2f5", height: "100vh" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{ backgroundColor: "#1D24CA" }}
              onClick={handleOpenStudentForm}
            >
              Add Student
            </Button>
          </Box>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
            editMode="row"
            pagination
            components={{
              Toolbar: () => (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 1,
                    backgroundColor: "#fff",
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  <Typography variant="h6">Manage Students</Typography>
                </Box>
              ),
            }}
            sx={{
              "& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell": {
                borderBottom: "1px solid #ccc",
                padding: "8px",
              },
              "& .MuiDataGrid-columnHeader": {
                fontWeight: "bold",
                backgroundColor: "#f5f5f5",
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "#e0e0e0",
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "1px solid #ccc",
              },
            }}
          />
        </Box>
      </Box>
      {openStudentForm && (
        <div className="fixed inset-0 bg-gray-900 flex justify-center items-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-96 shadow-blue-900">
            <FormControl>
              <h2 className="font-bold text-center text-lg text-sky-600">Student Form</h2>
              <label htmlFor="first-name"  className="block mb-2 text-sky-800 font-medium">
                First Name
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1
                  focus:outline-none focus:border-blue-500 placeholder-sky-500"
                  value={newStudent.first_name}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, first_name: e.target.value })
                  }
                />
              </label>
              <label htmlFor="last_name" 
           className="block mb-2 text-sky-800 font-medium">
                Last Name
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1
                  focus:outline-none focus:border-blue-500 placeholder-sky-500"
                  value={newStudent.last_name}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, last_name: e.target.value })
                  }
                />
              </label>
              <label htmlFor="gender" 
             className="block mb-2 text-sky-800 font-medium">
                Gender
                <select
                  name="gender"
                  id="gender"
                  className=" w-[200px] border border-gray-300 rounded-md py-2 px-3 mt-1 ml-1
                  focus:outline-none focus:border-blue-500 placeholder-sky-500"
                  value={newStudent.gender}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, gender: e.target.value })
                  }
                >
                  <option value="">Select Gender</option>
                  <option value="M">M</option>
                  <option value="F">F</option>
                </select>
              </label>

              <label htmlFor="grade" 
               className="block mb-2 text-sky-800 font-medium"
              >
                Grade
                <select
                  name="grade"
                  id="grade"
                  className="border border-gray-300 rounded-md py-2 px-3 mt-1 ml-[12px] w-[200px] mr-2
                    focus:outline-none focus:border-blue-500 placeholder-sky-500"
                  value={newStudent.grade}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, grade: e.target.value })
                  }
                  required
                  // defaultValue={1}
                >
                  <option value="">Select Grade</option>
                  {grades.map((g) => (
                    <option key={g.id} value={g.grade}>
                      {g.grade}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="section" 
               className="block mb-2 text-sky-800 font-medium mr-1"
              >
                Section
                <select
                  name="section"
                  id="section"
                  className=" border border-gray-300 rounded-md py-2 px-3 mt-1 w-[200px]
                  focus:outline-none focus:border-blue-500 placeholder-sky-500 ml-1"
                  value={newStudent.section}
                  onChange={(e) =>
                    setNewStudent({ ...newStudent, section: e.target.value })
                  }
                >
                  <option value="">Select Section</option>
                  {["A", "B", "C", "D", "E"].map((section) => (
                    <option key={section} value={section}>
                      {section}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="roll_number"
               className="block mb-2 text-sky-800 font-medium"
              >
                Roll Number
                <input
                  type="number"
                  placeholder="Roll Number"
                  className="border border-gray-300 rounded-md py-2 px-3 mt-1 w-[200px]
                  focus:outline-none focus:border-blue-500 placeholder-sky-500 ml-1"
                  value={newStudent.roll_number}
                  onChange={(e) =>
                    setNewStudent({
                      ...newStudent,
                      roll_number: e.target.value,
                    })
                  }
                />
              </label>

              {/* Add other form fields similarly */}
              <div className="flex justify-between mb-2 mt-2">
                <Button
                  variant="contained"
                  onClick={() => {
                    handleClose();
                    setNewStudent({
                      first_name: "",
                      last_name: "",
                      gender: "",
                      roll_number: "",
                      grade: "",
                      section: "",
                    });
                  }}
                  sx={{ width: "120px", boxShadow: "0 0 3px 2px blue " }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    handleAddStudent();
                    handleClose();
                  }}
                  sx={{ width: "120px", boxShadow: "0 0 3px 2px blue " }}
                >
                  Add
                </Button>
              </div>
            </FormControl>
          </div>
        </div>
      )}
    </section>
  );
};

export default Students;
