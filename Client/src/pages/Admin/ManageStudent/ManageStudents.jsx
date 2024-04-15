import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Box, Typography, FormControl } from "@mui/material";
import axios from "axios";
import AdminNav from "../../../components/AdminNav";

const columns = [
  { field: "id", headerName: "Parent ID", width: 90 },
  { field: "first_name", headerName: "Parent-First-Name", width: 150 },
  { field: "last_name", headerName: "Parent-Last-Name", width: 150 },
  { field: "email", headerName: "Parent-Email", width: 170 },
  { field: "phone_number", headerName: "Phone-Number", width: 150 },
  { field: "first_name_child", headerName: "First-Name", width: 130 },
  { field: "last_name_child", headerName: "Last-Name", width: 130 },
  { field: "gender_child", headerName: "Gender", width: 60 },
  { field: "grade_child", headerName: " Grade", width: 60 },
  { field: "section_child", headerName: "Section", width: 80 },
  { field: "roll_number_child", headerName: "Roll_number", width: 80 },
];

const Students = () => {
  const [rows, setRows] = useState([]);
  const [openParentForm, setOpenParentForm] = useState(false);
  const [parentInfo, setParentInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    children: 0,
  });
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/student/");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    fetchStudents();
  }, []);

  const handleAddParentInfo = () => {
    if (
      !parentInfo.first_name ||
      !parentInfo.last_name ||
      !parentInfo.email ||
      !parentInfo.phone_number ||
      !parentInfo.children
    ) {
      alert("Please fill all fields.");
      return;
    }
    axios
      .post("http://127.0.0.1:8000/api/add-parent/", parentInfo)
      .then((response) => {
        console.log("Parent added successfully:", response.data);
        alert("New parent added successfully!");
        setParentInfo({
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          children: 0,
        });
        setRows((prevRows) => [...prevRows, response.data]);
        setOpenParentForm(false);
      })
      .catch((error) => {
        console.error("Error adding parent:", error);
        alert("An error occurred while adding the parent.");
      });
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/parent/")
      .then((res) => {
        console.log(res.data);
        setRows(finalSpread(res.data));
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, [parentInfo]);

  const finalSpread = (data) => {
    const final = [];
    for (const key in data) {
      final.push(dis(data[key]));
    }
    return final;
  };

  const dis = (data) => {
    const res = {};
    const child = {};

    if (data) {
      for (const key in data) {
        if (key !== "children") res[key] = data[key];
      }
    }

    if (data.children) {
      for (const key in data.children[0]) {
        child[key + "_child"] = data.children[0][key];
      }
    }

    return Object.assign({}, res, child);
  };

  const handleClose = () => {
    setOpenParentForm(false);
  };

  return (
    <>
    <AdminNav/>
    <section className="flex flex-col items-center">
      <Box margin="20px" height="calc(100vh - 40px)" width="calc(100vw - 40px)" sx={{ fontWeight: 600 }}>
        <h1 className="text-center font-bold text-lg ">Manage parent list</h1>
        <Button variant="contained" onClick={() => setOpenParentForm(true)} sx={{marginBottom:'5px'}}>Add Parent</Button>
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
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 1,
                  backgroundColor: '#fff',
                  borderBottom: '1px solid #ccc',
                }}
              >
                <Typography variant="h6">Manage Students</Typography>
              </Box>
            ),
          }}
          sx={{
            '& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell': {
              borderBottom: '1px solid #ccc',
              padding: '8px',
            },
            '& .MuiDataGrid-columnHeader': {
              fontWeight: 'bold',
              backgroundColor: '#f5f5f5',
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: '#e0e0e0',
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: '1px solid #ccc',
            },
          }}
        />
      </Box>
      <section>
        <div>
          {openParentForm && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white rounded-2xl shadow-2xl shadow-blue-800 p-6 w-96">
                <h2 className="font-bold text-center text-blue-600 text-pretty shadow-xl mb-2">Parent Form</h2>
                <label htmlFor="first-name"
                 className="block mb-2 text-sky-800 font-medium"
                >
                  First Name
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1
                    focus:outline-none focus:border-blue-500 placeholder-sky-500"
                    value={parentInfo.first_name}
                    onChange={(e) => setParentInfo({ ...parentInfo, first_name: e.target.value })}
                  />
                </label>
                <label htmlFor="last-name"  className="block mb-2 text-sky-800 font-medium">
                  Last Name
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-[100%] border border-gray-300 rounded-md py-2 px-3 mt-1
                    focus:outline-none focus:border-blue-500 placeholder-sky-500"
                    value={parentInfo.last_name}
                    onChange={(e) => setParentInfo({ ...parentInfo, last_name: e.target.value })}
                  />
                </label>
                <label htmlFor="last-name" className="mb-2">
                  Email
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-[100%] border border-gray-300 rounded-md py-2 px-3 mt-1
                    focus:outline-none focus:border-blue-500 placeholder-sky-500"
                    value={parentInfo.email}
                    onChange={(e) => setParentInfo({ ...parentInfo, email: e.target.value })}
                  />
                </label>
                <label htmlFor="last-name"  className="block mb-2 text-sky-800 font-medium">
                  Phone number
                  <input
                    type="number"
                    placeholder="Phone number"
                    className="w-[100%] border border-gray-300 rounded-md py-2 px-3 mt-1
                    focus:outline-none focus:border-blue-500 placeholder-sky-500"
                    value={parentInfo.phone_number}
                    onChange={(e) => setParentInfo({ ...parentInfo, phone_number: e.target.value })}
                  />
                </label>
                <label htmlFor="section"  className="block mb-2 text-sky-800 font-medium">
                  Student_ID
                  <select
                    name="student_id"
                    id="student_id"
                    className="border border-gray-300 rounded-md py-2 px-3 mt-3 w-full ml-1
                    focus:outline-none focus:border-blue-500 placeholder-sky-500"
                    value={parentInfo.children}
                    onChange={(e) => setParentInfo({ ...parentInfo, children: e.target.value })}
                  >
                    {students.map((student) => (
                      <option key={student.id} value={student.id}>
                        {student.first_name} {student.last_name}
                      </option>
                    ))}
                  </select>
                </label>
                <div className="flex justify-between mt-6  mb-2">
                  <Button variant="contained" onClick={handleClose} sx={{ width: "120px", boxShadow: "0 0 3px 2px blue " }}>Cancel</Button>
                  <Button variant="contained" onClick={handleAddParentInfo} sx={{ width: "120px", boxShadow: "0 0 3px 2px blue " }}>Add</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </section>
    </>
  );
};

export default Students;
