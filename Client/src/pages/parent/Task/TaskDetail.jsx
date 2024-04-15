import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";

const TaskDetail = ({ tasks }) => {
  const { taskId } = useParams();
  const task = tasks.find((task) => Number(task.id) === Number(taskId));

  if (!task) {
    return null;
  }

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-3xl font-bold mb-8 text-[#B85B05]">{task.title}</h1>
      <div className="border border-gray-300 rounded-md p-4">
        <p className="mb-4">
          <span className="font-semibold">Type:</span>
          <span className="ml-2 text-gray-700">{task.type}</span>
        </p>
        <p className="mb-4">
          <span className="font-semibold">Date:</span>
          <span className="ml-2 text-gray-700">
            {moment(task.date).format("YYYY-MM-DD")}
          </span>
        </p>
        <p className="mb-4">
          <span className="font-semibold">Deadline:</span>
          <span className="ml-2 text-gray-700">
            {moment(task.deadline).format("YYYY-MM-DD hh:mm A")}
          </span>
        </p>
        <p className="mb-4">
          <span className="font-semibold">Description:</span>
          <span className="ml-2 text-gray-700">{task.description}</span>
        </p>
        <p className="mb-4">
          <span className="font-semibold">Status:</span>
          <span className="ml-2 text-gray-700">{task.status}</span>
        </p>
        <p className="mb-4">
          <span className="font-semibold">Details:</span>
          <span className="ml-2 text-gray-700">{task.details}</span>
        </p>
      </div>
    </div>
  );
};

TaskDetail.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      details: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default TaskDetail;
