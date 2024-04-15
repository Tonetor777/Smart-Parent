import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const TaskList = ({ tasks, filter }) => {
  const navigate = useNavigate();

  if (tasks.length === 0) {
    return <p>No tasks to display</p>;
  }

  return (
    <table className="table-fixed w-full">
      <thead className="border-t-2 border-b-4 border-gray-300">
        <tr>
          <th className="w-1/2 px-4 py-2 text-[#0F6CBF] text-left">Title</th>
          {filter === "All" && (
            <>
              <th className="w-1/4 px-4 py-2 text-[#0F6CBF] text-left">Type</th>
              <th className="w-1/4 px-4 py-2 text-[#0F6CBF] text-left">Date</th>
            </>
          )}
          <th className="w-1/4 px-4 py-2 text-[#0F6CBF] text-left">Deadline</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr
            key={task.id}
            className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-gray-200 border-gray-300 border-t-2 cursor-pointer`}
            onClick={() => navigate(/tasks/`${task.id}`)}
          >
            <td className="px-4 py-2">{task.title}</td>
            {filter === "All" && (
              <>
                <td className="px-4 py-2">{task.type}</td>
                <td className="px-4 py-2">
                  {moment(task.date).format("YYYY-MM-DD")}
                </td>
              </>
            )}
            <td className="px-4 py-2">
              {moment(task.deadline).format("YYYY-MM-DD hh:mm A")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
    }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
};

export default TaskList;
