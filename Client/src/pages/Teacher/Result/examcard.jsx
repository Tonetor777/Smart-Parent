import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';

const ExamCard = ({ title, fileUrl, onDelete }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div>
          <strong>Title: </strong>
          {title}
        </div>
        <div>
          <strong>File: </strong>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">{fileUrl}</a>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" startIcon={<DeleteIcon />} onClick={onDelete}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default ExamCard;
