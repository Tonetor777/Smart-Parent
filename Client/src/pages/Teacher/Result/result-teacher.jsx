
import React from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import  { useState } from 'react';
import ExamCard from './examcard';


const ExamCardList = () => {
  const [exams, setExams] = useState([]);
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !file) {
      alert('Please enter a title and upload a file.');
      return;
    }

    const fileUrl = URL.createObjectURL(file);

    setExams([...exams, { title, fileUrl }]);
    setTitle('');
    setFile(null);
  };

  const handleDelete = (index) => {
    const updatedExams = [...exams];
    updatedExams.splice(index, 1);
    setExams(updatedExams);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          helperText="Please enter exam title before uploading"
          id="demo-helper-text-misaligned"
          label="Title"
        />
        <input
          accept="image/*, .pdf, .doc, .docx"
          type="file"
          id="file-input"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <label htmlFor="file-input">
          <Button
            component="span"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload File
          </Button>
        </label>
        {file && <span>{file.name}</span>}
        <Button type="submit" size="small">Submit</Button>
      </form>

      {exams.map((exam, index) => (
        <ExamCard
          key={index}
          title={exam.title}
          fileUrl={exam.fileUrl}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
}

export default ExamCardList