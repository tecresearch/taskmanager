import React, { useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import Navbar from "../components/Landing/Navbar";
import MainContent from "../components/Landing/MainContent";
import Footer from "../components/Landing/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
const LandingPage = () => {
//session manage
  const history = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch=useDispatch();

  
    if(localStorage.getItem("userId") && localStorage.getItem("token")){
      dispatch(authActions.login());
    }
     if (isLoggedIn===true) {
      history("/");
    }
 
    console.log("dashboard: "+isLoggedIn);

  // Reference to the Developer section
  const developerRef = useRef(null);

  // Scroll to Developer section on menu click
  const scrollToDeveloper = () => {
    if (developerRef.current) {
      developerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Show a toast notification when the component mounts
  useEffect(() => {
    toast.success(
      "Get Started with TaskManager, developed by Mr. Brijesh, a passionate software developer."
    );
  }, []);

  return (
    <div id="home" className="min-h-screen text-white">
      {/* Navbar */}
      <Navbar scrollToDeveloper={scrollToDeveloper} />

      {/* Main Content */}
      <MainContent />

      {/* Footer */}
      <Footer />

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
    </div>
  );
};

export default LandingPage;
