import "./App.css";
import * as React from "react";
import Dashboard from "./pages/dashboard-page/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import InputPage from "./pages/input-page/InputPage";
import AnalysisWeek from "./pages/analysis-page/Analysis";
import LoginPage from "./pages/login-page/LoginPage";
import { myContext } from "./Context";

function App() {
  const userObject = React.useContext(myContext);
  return (
    <Routes>
      <Route
        path="/main"
        element={userObject ? <Dashboard /> : <Navigate to="/" />}
      ></Route>
      <Route
        path="/main/input"
        element={userObject ? <InputPage /> : <Navigate to="/" />}
      ></Route>
      <Route
        path="/main/analysis/week"
        element={userObject ? <AnalysisWeek /> : <Navigate to="/" />}
      ></Route>
      <Route
        path="/main/analysis/month"
        element={userObject ? <AnalysisWeek /> : <Navigate to="/" />}
      ></Route>
      <Route
        path="/main/analysis/year"
        element={userObject ? <AnalysisWeek /> : <Navigate to="/" />}
      ></Route>
      <Route
        path="/"
        element={userObject ? <Navigate to="/main" /> : <LoginPage />}
      ></Route>
    </Routes>
  );
}

export default App;
