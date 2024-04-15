import React, { useState, useEffect } from 'react';

const RecentAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await fetch('/http://127.0.0.1:8000/api/parent/');
        const data = await response.json();
        const sortedAssignments = data.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
        const recentAssignments = sortedAssignments.slice(0, 5); // Display only the first 5 assignments
        setAssignments(recentAssignments);
        setLoading(false);
      } catch (error) {
        setError('Error fetching assignments');
        setLoading(false);
      }
    };

    fetchAssignments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const currentDate = new Date();

  return (
    <div>
    <div className="block ">
      {assignments.map((assignment) => {
        const dueDate = new Date(assignment.dueDate);
        if (dueDate < currentDate) {
          return null;
        }
        return (
          <div key={assignment.id} className="w-auto h-auto mb-3 border  ">
            <div className='flex justify-between '>
              <h3 className="text-lg font-bold  ">{assignment.title}</h3>
              <p className="text-gray-600 ">Course: {assignment.course}</p>
              <p className="text-gray-600">Due Date: {assignment.dueDate}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
};

export default RecentAssignments;