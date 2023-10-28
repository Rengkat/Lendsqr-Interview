import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

import {
  DecisionModels,
  Guarantors,
  Karma,
  LoanRequest,
  LoginPage,
  Savings,
  UserDetailLayOut,
  Whitelist,
  Error,
  SharedLayout,
  User,
  MainDashboard,
  ProtectedRoute,
} from "./Pages/Index";
import {
  AppAndSystem,
  Document,
  BankDetails,
  Saving,
  GenteralDetails,
} from "./Pages/Dashboard/UserDetails/index";
// import { useData } from "./Pages/Dashboard/UserDetails/UserDetail";
function App() {
  // const { data }: any = useData();

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Error />} />
        {/* <ProtectedRoute> */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }>
          <Route index element={<MainDashboard />} />
          <Route path="dashboard" element={<MainDashboard />} />
          <Route path="user" element={<User />} />
          <Route path=":userID" element={<UserDetailLayOut />}>
            <Route index element={<GenteralDetails />} />
            <Route path="generalDetails" element={<GenteralDetails />} />
            <Route path="document" element={<Document />} />
            <Route path="appAndSystem" element={<AppAndSystem />} />
            <Route path="bankDetails" element={<BankDetails />} />
            <Route path="saving" element={<Saving />} />
          </Route>
          <Route path="stylists" element={<Guarantors />} />
          <Route path="orders" element={<DecisionModels />} />
          <Route path="products" element={<Savings />} />
          <Route path="loanRequest" element={<LoanRequest />} />
          <Route path="wishlist" element={<Whitelist />} />
          <Route path="cancel" element={<Karma />} />

          {/* </ProtectedRoute> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
