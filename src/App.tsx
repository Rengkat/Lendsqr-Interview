import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

import {
  LoginPage,
  UserDetailLayOut,
  Error,
  SharedLayout,
  User,
  MainDashboard,
  ProtectedRoute,
  Orders,
  Stylists,
  Products,
  StylistsLayout,
} from "./Pages/Index";
import {
  GenteralDetails,
  UserOrders,
  UserCart,
  UserWishlist,
} from "./Pages/Dashboard/UserDetails/index";
import StylistGeneralDetail from "./Pages/Dashboard/StylistDetail/StylistGeneralDetail";
import StylistProducts from "./Pages/Dashboard/StylistDetail/Products";
function App() {
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
          <Route path="customers" element={<User />} />
          <Route path="stylist" element={<Stylists />} />
          <Route path="stylist/:stylistId" element={<StylistsLayout />}>
            <Route path="general-detail" element={<StylistGeneralDetail />} />
            <Route path="products" element={<StylistProducts />} />
            <Route index element={<StylistGeneralDetail />} />
          </Route>

          <Route path="users/:userId" element={<UserDetailLayOut />}>
            <Route index element={<GenteralDetails />} />
            <Route path="generalDetails" element={<GenteralDetails />} />
            <Route path="orders" element={<UserOrders />} />
            <Route path="cart" element={<UserCart />} />
            <Route path="wishlist" element={<UserWishlist />} />
          </Route>
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />

          {/* </ProtectedRoute> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
