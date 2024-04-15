import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import TaskDetail from "./TaskDetail";
import TaskList from "./TaskList";
import TeacherTask from "../../Teacher/Task/TeacherTask";

const Task = ({ tasks, setTasks }) => {
  const [filter, setFilter] = useState("All");
  const { taskId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const task = tasks.find((task) => Number(task.id) === Number(taskId));
    if (!task && taskId) {
      navigate("/tasks");
    }
  }, [tasks, navigate, taskId]);

  return (
    <div className="container h-screen mx-auto my-10">
      <h1 className="text-3xl font-bold mb-3 text-[#324992]">Tasks</h1>
      <div className="flex space-x-4 mb-8">
        <h2
          className={`cursor-pointer font-bold ${filter === "All" ? "underline" : ""} text-[#333366] hover:text-blue-700`}
          onClick={() => setFilter("All")}
        >
          All
        </h2>
        <h2
          className={`cursor-pointer font-bold ${filter === "Homework" ? "underline" : ""} text-[#333366] hover:text-blue-700`}
          onClick={() => setFilter("Homework")}
        >
          Homeworks
        </h2>
        <h2
          className={`cursor-pointer font-bold ${filter === "Assignment" ? "underline" : ""} text-[#333366] hover:text-blue-700`}
          onClick={() => setFilter("Assignment")}
        >
          Assignments
        </h2>
      </div>
      <Routes>
        <Route path="/" element={<TaskList tasks={tasks} filter={filter} />} />
        <Route path=":taskId" element={<TaskDetail tasks={tasks} />} />
        <Route
          path="/teacher/*"
          element={<TeacherTask tasks={tasks} setTasks={setTasks} />}
        />
      </Routes>
    </div>
  );
};

Task.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default Task;
