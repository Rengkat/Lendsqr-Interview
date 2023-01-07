import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import User from "./Components/UsersTable/User";
import {
  DecisionModels,
  Guarantors,
  Karma,
  Loan,
  LoanRequest,
  LoginPage,
  Savings,
  UserDetail,
  Whitelist,
  Error,
  SharedLayout,
  Organization,
  LoanProducts,
  SavingsProduct,
  FeesAndCharges,
  Tansactions,
  Services,
  ServiceAccount,
  Settlement,
  Report,
  Reference,
  FeesAndPricing,
  AuditLogs,
  MainDashboard,
} from "./Pages/Index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <Route index element={<SharedLayout />} /> */}
          <Route path="user" element={<User />} />
          <Route path="/userDetail" element={<UserDetail />} />
          <Route path="/guarantors" element={<Guarantors />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/decisionModel" element={<DecisionModels />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/loanRequest" element={<LoanRequest />} />
          <Route path="/wishlist" element={<Whitelist />} />
          <Route path="/karma" element={<Karma />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="loanProducts" element={<LoanProducts />} />
          <Route path="/savingProducts" element={<SavingsProduct />} />
          <Route path="/feesAndCharges" element={<FeesAndCharges />} />
          <Route path="/transactions" element={<Tansactions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/servicesAccount" element={<ServiceAccount />} />
          <Route path="/settlement" element={<Settlement />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/preferences" element={<Reference />} />
          <Route path="/feesAndPricing" element={<FeesAndPricing />} />
          <Route path="/auditLogs" element={<AuditLogs />} />
          <Route path="/dashboard" element={<MainDashboard />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
