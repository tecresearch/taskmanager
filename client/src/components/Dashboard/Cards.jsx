import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdAddTask } from "react-icons/md";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

function Cards({ home, setInputDiv, data }) {
  const handleComplete = (id) => {
    toast.success(`Task with ID ${id} marked as completed.`);
  };

  const handleImportant = (id) => {
    toast.success(`Task with ID ${id} marked as important.`);
  };

  const updateTask = (id) => {
    toast.success(`Task with ID ${id} is ready to be updated.`);
  };

  const deleteTask = async (taskId) => {
    try {
      // Include headers for authentication
      const headers = {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      };
  
      const response = await axios.delete(`http://localhost:150/api/v2/delete-task/${taskId}`, {
        headers
      });
  
      if (response.status === 200) {
        toast.success("Task Deleted Successfully");
      } else {
        toast.error("Failed to delete the task. Please try again.");
      }
    } catch (err) {
      // Log the error to console and show a user-friendly alert
      console.error("Error while deleting task:", err.response || err);
      if (err.response) {
        toast.error(`Error: ${err.response.data.message || "Failed to delete the task."}`);
      } else {
        toast.error("Error: Unable to connect to the server.");
      }
    }
  };
  // console.log(data);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {data.map((item) => (
        <div key={item.id} className="flex flex-col justify-between border rounded-lg p-4 bg-gray-800">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <hr />
            <p className="text-sm text-white">{item.desc}</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-4">
            <button
              className={`${item.complete === false ? "bg-red-400" : "bg-green-700"} p-2 rounded w-full sm:w-3/6`}
              onClick={() => handleComplete(item._id)}
            >
              {item.complete === true ? "Completed" : "Incomplete"}
            </button>

            <div className="text-white flex justify-around mt-4 w-full sm:w-3/6 text-2xl font-semibold">
              <button className="p-2 hover:bg-gray-700 rounded" onClick={() => handleImportant(item._id)}>
                {item.important === false ? (
                  <CiHeart />
                ) : (
                  <CiHeart className="text-red-500" />
                )}
              </button>
              <button className="p-2 hover:bg-gray-700 rounded" onClick={() => updateTask(item._id)}>
                <FaEdit />
              </button>
              <button className="p-2 hover:bg-gray-700 rounded" onClick={() => deleteTask(item._id)}>
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      ))}

      {home === "true" && (
        <button
          onClick={() => setInputDiv("fixed")}
          className="flex flex-col justify-center items-center border rounded-lg p-4 bg-gray-800 hover:scale-105 hover:cursor-pointer transition-all duration-300"
        >
          <MdAddTask className="text-5xl text-white" />
          <h2 className="text-2xl mt-4 p-2 text-white">Add Task</h2>
        </button>
      )}
    </div>
    
          {/* ToastContainer to display toasts */}
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
    </>
  );
}

export default Cards;
