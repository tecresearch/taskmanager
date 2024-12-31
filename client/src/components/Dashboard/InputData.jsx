import React, { useState } from "react";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

function InputData({ inputDiv, setInputDiv, refreshTasks }) {
  const [Data, setData] = useState({ title: "", desc: "" }); // Initialize Data with empty strings
  const [error, setError] = useState(null); // State for capturing errors

  const headers = {
    id: localStorage.getItem("userId"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submitData = async () => {
    if (!Data.title.trim() || !Data.desc.trim()) {
      toast.info("All fields are required");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:150/api/v2/create-task",
        Data,
        { headers }
      );
      toast.success(response.data.message || "Task created successfully");
      setInputDiv("hidden"); // Close the input modal
      setData({ title: "", desc: "" }); // Reset the form
      
    } catch (err) {
      console.error("Error creating task:", err);
     
      toast.error(err.data.message);
    }
  };

  return (
    <>
      {/* Background overlay */}
      <div
        className={`${
          inputDiv === "fixed" ? "fixed" : "hidden"
        } top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}
      ></div>

      {/* Modal content */}
      <div
        className={`${
          inputDiv === "fixed" ? "fixed" : "hidden"
        } top-5 left-0 flex items-center justify-center h-screen w-full`}
      >
        <div
          className={`${
            inputDiv === "fixed" ? "fixed" : "hidden"
          } w-3/6 bg-gray-900 p-4 rounded`}
        >
          {/* Close button */}
          <div className="flex justify-end px-4 py-4">
            <button
              onClick={() => setInputDiv("hidden")}
              className="text-2xl text-white"
            >
              <RxCross2 />
            </button>
          </div>

          {/* Form fields */}
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={Data.title}
            onChange={change}
            className="px-3 py-2 rounded w-full bg-gray-700 text-white"
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Description"
            name="desc"
            value={Data.desc}
            onChange={change}
            className="px-3 py-2 rounded w-full bg-gray-700 text-white my-3"
          ></textarea>

          {/* Submit button */}
          <button
            type="submit"
            className="px-3 py-2 bg-blue-400 rounded text-black text-xl hover:bg-blue-500"
            onClick={submitData}
          >
            Submit
          </button>

          {/* Error message display */}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
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

export default InputData;
