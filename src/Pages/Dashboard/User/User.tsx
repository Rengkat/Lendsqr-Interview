import UserSummary from "../../../Components/UserSummary/UserSummary";
import UserTable from "../../../Components/UserTable/UserTable";
import { useGetUsersQuery } from "../../../Redux/Api/UserApi";
import "./style.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToUsers } from "../../../Redux/Features/LoginSlice";

import Barchat from "../MainDashboard/Barchat";
import PieCharts from "../MainDashboard/PieChart";

const User = () => {
  const { data, isFetching } = useGetUsersQuery(undefined);
  const modifiedData = data?.map((response) => ({
    ...response,
    status: "active",
  }));
  const { users } = useSelector((store: any) => store.user);
  // console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addToUsers(modifiedData));
  }, [data]);

  return (
    <div className="userContainer">
      <UserSummary />

      <div className="bar-chart">
        <h1>Users signed</h1>
        <div className="charts">
          <Barchat />
          <PieCharts />
        </div>
      </div>
      <UserTable />
    </div>
  );
};

export default User;
