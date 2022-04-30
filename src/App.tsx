import "./App.css";
import * as React from "react";
import { useState, useEffect } from "react";
import Dashboard from "./pages/dashboard-page/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import InputPage from "./pages/input-page/InputPage";
import AnalysisWeek from "./pages/analysis-page/Analysis";
import LoginPage from "./pages/login-page/LoginPage";
import axios from "axios";

function App() {
  const [isLogIn, setIsLogIn] = useState(false);

  useEffect(() => {
    if (document.cookie) setIsLogIn(true);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={isLogIn ? <Navigate to="/main" /> : <LoginPage />}
      ></Route>
      <Route
        path="/main"
        element={isLogIn ? <Dashboard /> : <Navigate to="/" />}
      ></Route>
      <Route
        path="/main/input"
        element={isLogIn ? <InputPage /> : <Navigate to="/" />}
      ></Route>
      <Route
        path="/main/analysis/week"
        element={isLogIn ? <AnalysisWeek /> : <Navigate to="/" />}
      ></Route>
      <Route
        path="/main/analysis/month"
        element={isLogIn ? <AnalysisWeek /> : <Navigate to="/" />}
      ></Route>
      <Route
        path="/main/analysis/year"
        element={isLogIn ? <AnalysisWeek /> : <Navigate to="/" />}
      ></Route>
    </Routes>
  );
}

export default App;
