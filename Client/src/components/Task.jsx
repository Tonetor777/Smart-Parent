import React from 'react';
import PropTypes from 'prop-types';

function Task({ task }) {
    const { title, description, deadline, details: { subject } } = task;
    // Format deadline date
    const formattedDeadline = new Date(deadline).toLocaleDateString();

    return (
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2 bg-slate-400 p-3">{title}</h2>
            <p className="text-gray-800 mb-2">{description}</p>
            <div className="flex justify-between items-center">
                <p className="text-gray-500"> Subject: {subject.subject}</p>
                <p className="text-gray-500">Deadline: {formattedDeadline}</p>
            </div>
        </div>
    );
}

Task.propTypes = {
    task: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        deadline: PropTypes.string.isRequired,
        details: PropTypes.shape({
            subject: PropTypes.shape({
                subject: PropTypes.string.isRequired
            }).isRequired
        }).isRequired
    }).isRequired
};

export default Task;
