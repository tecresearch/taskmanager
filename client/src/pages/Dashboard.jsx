import React, { useEffect } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
function Dashboard() {
  //session handling with redux state managment
  const history = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  if (localStorage.getItem("userId") && localStorage.getItem("token")) {
    dispatch(authActions.login());
  }
  if (isLoggedIn) {
    history("/");
  }

  // console.log("dashboard: " + isLoggedIn);
  return (
    <div className="flex flex-col md:flex-row min-h-screen gap-4 p-4">
      {/* Sidebar */}
      <div className="w-full md:w-1/6 border   border-gray-500 rounded-xl p-4 flex flex-col justify-normal">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full md:w-5/6 border border-gray-500 rounded-xl p-4 flex-grow">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
