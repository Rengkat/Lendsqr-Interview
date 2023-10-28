import React from "react";
import UserSummary from "../../../Components/UserSummary/UserSummary";
import Barchat from "./Barchat";
import PieCharts from "./PieChart";
import SpiderChart from "./SpiderChart";
import Spread from "./Spread";
import { useGetUsersQuery } from "../../../Redux/Api/UserApi";
import "./Style.scss";
const MainDashboard = () => {
  const { data, isFetching } = useGetUsersQuery(undefined);
  const tenCustomer = data?.slice(0, 10);

  return (
    <div className="containerDash">
      <UserSummary />
      <div className="top-charts">
        <Spread />
        <div className="bar-chart">
          <div
            style={{
              padding: "1rem 0",
            }}>
            MONTHLY SALES
          </div>
        </div>
      </div>
      <div className="pieCharts">
        {/* <PieCharts />

        <SpiderChart /> */}
      </div>
    </div>
  );
};

export default MainDashboard;
