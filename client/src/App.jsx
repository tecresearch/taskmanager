import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AllTasks from './pages/AllTasks';
import CompletedTasks from './pages/CompletedTasks';
import ImportantTasks from './pages/ImportantTasks';
import IncompletedTask from './pages/IncompletedTask';
import Signup from './pages/Signup';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import { authActions } from './store';
function App() {
  const history = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch=useDispatch();

  useEffect(() => {
    if(localStorage.getItem("id") && localStorage.getItem("token")){
      dispatch(authActions.login());
    }
    if (isLoggedIn===false) {
      history("/index:main");
    }

  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Routes>
        <Route exact path="/" element={<Dashboard />}>
          <Route index element={<AllTasks />} />
          <Route path="/completedTasks" element={<CompletedTasks />} />
          <Route path="/importantTasks" element={<ImportantTasks />} />
          <Route path="/incompletedTasks" element={<IncompletedTask />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/index:main" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
