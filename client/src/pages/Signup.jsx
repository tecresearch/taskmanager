import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"; // Import useSelector for Redux state
import { useNavigate } from "react-router-dom";
import { authActions } from "../store";
function Signup() {
//session handling with redux state managment
   const history = useNavigate();
   const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch=useDispatch();

    if(localStorage.getItem("userId") && localStorage.getItem("token")){
      dispatch(authActions.login());
    }
    if(isLoggedIn){
      history("/");
    }
  console.log("dashboard: "+isLoggedIn);
  // State for form data
  const [Data, setData] = useState({ username: "", email: "", password: "" });

  // Handle input changes
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  // Handle form submission
  const submit = async () => {
    try {
      if (!Data.username || !Data.email || !Data.password) {
        // Show warning toast if fields are empty
        toast.warn("All fields are required!");
        return;
      }

      // Send POST request to register API
      const response = await axios.post("http://localhost:150/api/v1/register", Data);
      console.log(response);

      if (response.status === 201) {
        // Show success message and redirect to login
        toast.success(`${response.data.message} Redirecting to login...`);
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      }
    } catch (errors) {
      // Handle errors and show error toast
      console.error(errors);
      const errorMessage = errors.response?.data?.message || "An error occurred!";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="h-[98vh] flex items-center justify-center bg-gradient-to-r from-gray-500 to-white-400">
      <div className="p-6 w-96 flex flex-col items-center justify-center border border-gray-600 rounded-2xl bg-gray-800 shadow-xl">
        <div className="text-3xl font-bold text-white mb-4">Create Account</div>

        {/* Username Input */}
        <input
          type="text"
          placeholder="Username"
          className="bg-gray-700 px-4 py-2 mb-4 w-full rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="username"
          value={Data.username}
          onChange={change}
          required
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="bg-gray-700 px-4 py-2 mb-4 w-full rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="email"
          value={Data.email}
          onChange={change}
          required
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-700 px-4 py-2 mb-6 w-full rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="password"
          value={Data.password}
          onChange={change}
          required
        />

        {/* Submit Button */}
        <button
          className="bg-blue-600 text-white font-semibold rounded-lg py-2 px-6 w-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          onClick={submit}
        >
          Signup
        </button>

        {/* Login Redirect */}
        <p className="mt-4 text-sm text-gray-400">
          Already have an account?{" "}
          <a
            onClick={() => navigate("/login")}
            className="text-blue-400 hover:text-blue-500 hover:cursor-pointer"
          >
            Login here
          </a>
        </p>
      </div>

      {/* ToastContainer to display toasts */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Signup;
