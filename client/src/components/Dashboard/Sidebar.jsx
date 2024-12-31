import React, { useEffect, useState } from "react";
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
import axios from "axios";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const taskLinks = [
    { title: "All Tasks", icon: <CgNotes />, link: "/" },
    { title: "Important Tasks", icon: <MdLabelImportant />, link: "/importantTasks" },
    { title: "Completed Tasks", icon: <FaCheckDouble />, link: "/completedTasks" },
    { title: "Incomplete Tasks", icon: <TbNotebookOff />, link: "/incompletedTasks" },
  ];

  const logOut = () => {
    dispatch(authActions.logout());
    localStorage.clear(); // Clear all localStorage
    navigate("/signup");
  };

//fetch api to get all tasks and user
  const [data, setData] = useState(null); // Use null for initial state
  const [error, setError] = useState(null); // State for capturing errors

  const headers = {
    id: localStorage.getItem("userId"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:150/api/v2/get-all-tasks",
          { headers }
        );
        console.log(response.data.data.tasks);
        console.log("User: "+response.data.data.username);
        console.log("Email: "+response.data.data.email);

        setData(response.data.data); // Ensure correct data assignment
        console.log(response.data.data); // Ensure correct data assignment
      } catch (err) {
        console.error("Error fetching tasks:", err);
        setError(err.response?.data?.message || "Failed to fetch tasks");
      }
    };

    fetchTasks();
  }, []); // Run only once

  return (
    <div className="flex flex-col h-full p-4 bg-gray-800 text-white">
      {/* User Info Section */}
      {data ? (
        <div className="mb-4">
          <h2 className="text-xl font-semibold">{data.username}</h2>
          <h4 className="text-gray-400">{data.email}</h4>
          <hr className="my-2 border-gray-600" />
        </div>
      ) : (
        error && <p className="text-red-500">{error}</p>
      )}

      {/* Sidebar Links */}
      <div className="flex-1 overflow-y-auto">
        {taskLinks.map((item, i) => (
          <Link
            to={item.link}
            key={i}
            className="my-2 flex items-center p-2 hover:bg-gray-600 rounded transition-all"
          >
            <span className="mr-2">{item.icon}</span>
            {item.title}
          </Link>
        ))}
      </div>

      {/* Log Out Button */}
      <div>
        <button
          className="bg-red-600 w-full p-2 rounded hover:bg-red-700 transition-all"
          onClick={logOut}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
