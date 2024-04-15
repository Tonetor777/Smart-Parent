import React from 'react';
import PropTypes from 'prop-types';

function ExamCard({ exam }) {
    const { description, exam_date, total_marks, grade, details } = exam;
    const { subject } = details;

    // Format exam date
    const formattedExamDate = new Date(exam_date).toLocaleDateString();

    return (
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">{description}</h2>
            <p className="text-gray-800 mb-2">Subject: {subject.subject}</p>
            <p className="text-gray-800 mb-2">Exam Date: {formattedExamDate}</p>
            <p className="text-gray-800 mb-2">Total Marks: {total_marks}%</p>
            <p className="text-gray-800 mb-2">Grade: {grade}</p>
        </div>
    );
}

ExamCard.propTypes = {
    exam: PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        exam_date: PropTypes.string.isRequired,
        total_marks: PropTypes.string.isRequired,
        grade: PropTypes.number.isRequired,
        details: PropTypes.shape({
            subject: PropTypes.shape({
                id: PropTypes.number.isRequired,
                subject: PropTypes.string.isRequired
            }).isRequired
        }).isRequired
    }).isRequired
};

export default ExamCard;
