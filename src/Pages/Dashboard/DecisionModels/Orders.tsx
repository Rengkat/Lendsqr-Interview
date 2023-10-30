import React from "react";
import UserTable from "../../../Components/UserTable/UserTable";
import PieCharts from "../MainDashboard/PieChart";
import "./style.scss";
import LongGraph from "../MainDashboard/LongGraph";
const Orders = () => {
  return (
    <div className="orderContainer">
      {/* <ColorPiechart /> */}
      <div className="chrt">
        <h1>Orders</h1>
        <LongGraph />
      </div>
      <UserTable />
    </div>
  );
};

export default Orders;
