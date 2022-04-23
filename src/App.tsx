import "./App.css";
import * as React from "react";
import Dashboard from "./pages/dashboard-page/Dashboard";
import { Routes, Route, Router } from "react-router-dom";
import InputPage from "./pages/input-page/InputPage";
import AnalysisWeek from "./pages/analysis-page/Analysis";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/input" element={<InputPage />}></Route>
      <Route path="/analysis-week" element={<AnalysisWeek />}></Route>
      <Route path="/analysis-month" element={<AnalysisWeek />}></Route>
      <Route path="/analysis-year" element={<AnalysisWeek />}></Route>
    </Routes>
  );
}

export default App;
