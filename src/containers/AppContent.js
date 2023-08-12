import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import EmployeeRegister from "../pages/EmployeeRegister";
import HRManagement from "../pages/HRManagement";
import WorkContract from "../pages/WorkContract";
import SalaryData from "../pages/SalaryData";
function AppContent() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/login" && <Header />}
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/er" element={<EmployeeRegister />} />
        <Route path="/hrm" element={<HRManagement />} />
        <Route path="/wc" element={<WorkContract />} />
        <Route path="/sd" element={<SalaryData />} />
      </Routes>
    </div>
  );
}

export default AppContent;
