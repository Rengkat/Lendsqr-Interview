import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import User from "./Components/UsersTable/User";
import {
  Dashboard,
  DecisionModels,
  Guarantors,
  Karma,
  Loan,
  LoanRequest,
  LoginPage,
  MainDashboard,
  Savings,
  UserDetail,
  Whitelist,
} from "./Pages/Index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<User />} />
        <Route path="/userDetail" element={<UserDetail />} />
        <Route path="/guarantors" element={<Guarantors />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/decisionModel" element={<DecisionModels />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/loanRequest" element={<LoanRequest />} />
        <Route path="/whitelist" element={<Whitelist />} />
        <Route path="/karma" element={<Karma />} />
        <Route path="/main-dashboard" element={<MainDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
