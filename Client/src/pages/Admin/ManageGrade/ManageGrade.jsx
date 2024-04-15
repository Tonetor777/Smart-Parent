import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Box,
} from "@mui/material";
import AdminNav from "../../../components/AdminNav";

const columns = [
  { field: "id", headerName: "ID", width: 100, editable: true },
  { field: "grade", headerName: "Grade", width: 150, editable: true },
  { field: "sections", headerName: "Sections", width: 150, editable: true },
  { field: "subjects", headerName: "Subjects", width: 200, editable: true },
];

export default function ManageData() {
  const [data, setData] = React.useState([
    {
      id: 1,
      grade: "Grade 1",
      sections: ["A", "B", "C", "D"],
      subjects: ["English", "Math", "Science"],
    },
    {
      id: 2,
      grade: "Grade 2",
      sections: ["A", "B", "C"],
      subjects: ["Social Studies", "Art"],
    },
  ]);

  const [open, setOpen] = React.useState(false);
  const [newData, setNewData] = React.useState({
    grade: "",
    sections: [],
    subjects: [],
  });

  const handleClose = () => {
    setOpen(false);
    setNewData({ grade: "", sections: [], subjects: [] });
  };

  const handleAddData = () => {
    setData((prevData) => [
      ...prevData,
      { id: prevData.length + 1, ...newData },
    ]);
    handleClose();
  };

  return (
    <>
      <AdminNav />
      <section className="h-lvh mt-2">

        <Box margin="10px" height="calc(100vh - 40px)" sx={{ fontWeight: 600 }}>
        <h1 className="text-center font-bold text-lg ">Manage Grade list</h1>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Add Data
          </Button>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
          />
        </Box>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add New Data</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Grade"
              fullWidth
              value={newData.grade}
              onChange={(e) => setNewData({ ...newData, grade: e.target.value })}
            />
            <TextField
              select
              margin="dense"
              label="Sections"
              fullWidth
              value={newData.sections}
              onChange={(e) =>
                setNewData({ ...newData, sections: e.target.value })
              }
              SelectProps={{
                multiple: true,
              }}
            >
              {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"].map(
                (section) => (
                  <MenuItem key={section} value={section}>
                    {section}
                  </MenuItem>
                )
              )}
            </TextField>
            <TextField
              select
              margin="dense"
              label="Subjects"
              fullWidth
              value={newData.subjects}
              onChange={(e) =>
                setNewData({ ...newData, subjects: e.target.value })
              }
              SelectProps={{
                multiple: true,
              }}
            >
              {["English", "Math", "Science", "Social Studies", "Art"].map(
                (subject) => (
                  <MenuItem key={subject} value={subject}>
                    {subject}
                  </MenuItem>
                )
              )}
            </TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleAddData}>Add</Button>
          </DialogActions>
        </Dialog>
      </section>
    </>
  );
}
