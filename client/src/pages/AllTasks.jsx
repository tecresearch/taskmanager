import React, { useEffect, useState } from 'react'
import Cards from '../components/Dashboard/Cards'
import { MdAddTask } from "react-icons/md";
import InputData from '../components/Dashboard/InputData';
import axios from "axios"; 
function AllTasks() {
  const [inputDiv,setInputDiv]=useState("hidden");

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
      console.log("User: " + response.data.data.username);
      console.log("Email: " + response.data.data.email);

      setData(response.data.data); // Ensure correct data assignment
    } catch (err) {
      console.error("Error fetching tasks:", err);
      setError(err.response?.data?.message || "Failed to fetch tasks");
    }
  };
  fetchTasks();
 
}); // Empty array ensures the effect runs only once
// console.log("All task data:");
// data && console.log(data.tasks); // Use optional chaining to prevent errors if `data` is null


  return (
   <>
    <div>
      <div className="w-full flex justify-end px-4 py-4">
      
   <button onClick={() => setInputDiv(inputDiv === "hidden" ? "fixed" : "hidden")}>
  <MdAddTask className="text-4xl   hover:cursor-pointer transition-all duration-300" />
  </button>

      </div>
    {data && (   <Cards home={"true"} setInputDiv={setInputDiv} data={data.tasks} />)}
    </div>
  {/* Pass the state and setter to InputData */}
  <InputData inputDiv={inputDiv} setInputDiv={setInputDiv} />
   </> 
  )
}

export default AllTasks