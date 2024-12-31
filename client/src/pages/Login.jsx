import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { authActions } from "../store";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  //session handling with redux state managment
  const history = useNavigate();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    if(localStorage.getItem("userId") && localStorage.getItem("token")){
      dispatch(authActions.login());
    }
    if(isLoggedIn){
      history("/");
    }
 
  console.log("dashboard: "+isLoggedIn);
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      if (!formData.username || !formData.password) {
        toast.warn("All fields are required.");
        return;
      }

      const response = await axios.post(
        "http://localhost:150/api/v1/login",
        formData
      );

      // Reset form data
      setFormData({ username: "", password: "" });

      // Store data in localStorage
      const { username, _id } = response.data.user;
      const { token } = response.data;
      localStorage.setItem("username", username);
      localStorage.setItem("userId", _id);
      localStorage.setItem("token", token);

      console.log(`Username: ${username}`);
      console.log(`User ID: ${_id}`);
      console.log(`Token: ${token}`);
     
      // Dispatch Redux action for login
      dispatch(authActions.login());
     // Display success toast and navigate
     toast.success(response.data.message);
    setTimeout(()=>{
    
        navigate("/");
    },5000);

    } catch (error) {
      const errorMessage = error.response?.data?.message || "Something went wrong. Please try again.";
      console.error(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <div className="h-[98vh] flex items-center justify-center bg-gradient-to-l from-gray-500 to-white-400">
      <div className="p-6 w-96 flex flex-col items-center justify-center border border-gray-600 rounded-2xl bg-gray-800 shadow-xl">
        <div className="text-3xl font-bold text-white mb-4">Login</div>

        {/* Username Input */}
        <input
          type="text"
          placeholder="Username"
          className="bg-gray-700 px-4 py-2 mb-4 w-full rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-700 px-4 py-2 mb-6 w-full rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

        {/* Login Button */}
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white font-semibold rounded-lg py-2 px-6 w-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="mt-4 text-sm text-gray-400">
          Don't have an account?{' '}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-400 hover:text-blue-500 hover:cursor-pointer"
          >
            Sign up here
          </span>
        </p>
      </div>

      {/* ToastContainer */}
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

export default Login;
