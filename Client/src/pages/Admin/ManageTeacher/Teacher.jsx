import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Box, Typography, FormControl } from "@mui/material";
import axios from "axios";
import AdminNav from "../../../components/AdminNav";
import api from "../../../api";
const columns = [
  { field: "id", headerName: "ID", width: 100, editable: true },
  { field: "first_name", headerName: "First-name", width: 200, editable: true },
  { field: "last_name", headerName: "Last-name", width: 200, editable: true },
  { field: "email", headerName: "Email", width: 200, editable: true },
  { field: "phone_number", headerName: "Phone-number", width: 200, editable: true },
];

const Teachers = () => {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [newData, setNewData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });

  const handleClose = () => {
    setOpen(false);
    setNewData({
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
    });
  };



  const handleAddTeacher = () => {
    if (!newData.first_name || !newData.last_name || !newData.email || !newData.phone_number) {
      alert("All fields are required.");
      return;
    }

    axios
      .post("http://127.0.0.1:8000/api/add-teacher/", newData)
      .then((response) => {
        console.log("Teacher added successfully:", response.data);
        alert("New teacher added successfully!");
        handleClose();
        setNewData({
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
        });
      })
      .catch((error) => {
        console.error("Error adding teacher:", error);
        alert("An error occurred while adding the teacher.");
      });
  };

  // Fetch Teacher data when component mounts
  useEffect(() => {
    api.get("/api/teachers/")
      .then((res) => {
        console.log(res.data);
        setRows(res.data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, [newData]);

  return (
    <>
  <AdminNav/>

      <div className="flex flex-col items-center">

        <Box
          margin="7px"
          height="calc(100vh - 40px)"
          width="calc(100vw - 40px)"
          sx={{ fontWeight: 600 }}
        >
          <Typography className="text-center text-2xl font-extrabold text-sky-600" sx={{ fontWeight: "700", fontSize: "20px" }}>Teacher Data</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
            style={{ margin: "3px" }}
          >
            Add Teacher
          </Button>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
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
          </div>
        </Box>
        {open && <div className="w-[600px] bg-black ">
          <div className="fixed inset-0 flex justify-center items-center bg-slate-800">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-100% shadow-blue-900">
              <FormControl>
                <h2 className="font-bold text-center text-lg text-sky-800">Teacher Form</h2>
                <label htmlFor="first-name" className="block mb-2 text-sky-800 font-medium">
                  First Name
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1
                    focus:outline-none focus:border-blue-500 placeholder-sky-500"
                    value={newData.first_name}
                    onChange={(e) => setNewData({ ...newData, first_name: e.target.value })}
                  />
                </label>
                <label htmlFor="last_name" className="block mb-2 text-sky-800 font-medium">
                  Last Name
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1
                    focus:outline-none focus:border-blue-500 placeholder-sky-500"
                    value={newData.last_name}
                    onChange={(e) => setNewData({ ...newData, last_name: e.target.value })}
                  />
                </label>

                <label htmlFor="email" className="block mb-2 text-sky-800 font-medium">
                  Email
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1
                    focus:outline-none focus:border-blue-500 placeholder-sky-500"
                    value={newData.email}
                    onChange={(e) => setNewData({ ...newData, email: e.target.value })}
                  />
                </label>
                <label htmlFor="phone" className="block mb-2 text-sky-800 font-medium">
                  Phone number
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded-md py-2 px-3 mt-1
                    focus:outline-none focus:border-blue-500 placeholder-sky-500"
                    value={newData.phone}
                    onChange={(e) => setNewData({ ...newData, phone_number: e.target.value })}
                  />
                </label>

                {/* Add other form fields similarly */}
                <div className="flex justify-between mt-4">
                  <Button
                    variant="contained"
                    onClick={() => {
                      handleClose();
                      setNewData({
                        first_name: "",
                        last_name: "",
                        email: "",
                        phone_number: "",
                      });
                    }}
                    sx={{ width: "120px", boxShadow: "0 0 3px 2px blue " }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => {
                      handleAddTeacher();
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
        </div>}
      </div>
    </>
  );
}

export default Teachers;
