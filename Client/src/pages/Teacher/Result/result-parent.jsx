import { useState, useEffect } from 'react';
import ExamCard from './examcard';

const ExamCardDisplayPage = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const storedExams = JSON.parse(localStorage.getItem('exams'));
    if (storedExams) {
      setExams(storedExams);
    }
  }, []);

  return (
    <div>
      {exams.map((exam, index) => (
        <ExamCard
          key={index}
          title={exam.title}
          fileUrl={exam.fileUrl}
          
        />
      ))}
    </div>
  );
}

export default ExamCardDisplayPage
