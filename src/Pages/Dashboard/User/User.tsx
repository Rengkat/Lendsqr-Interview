import UserSummary from "../../../Components/UserSummary/UserSummary";
import UserTable from "../../../Components/UserTable/UserTable";
import { useGetUsersQuery } from "../../../Redux/Api/UserApi";
import "./style.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToUsers } from "../../../Redux/Features/LoginSlice";

import Barchat from "../MainDashboard/Barchat";
import PieCharts from "../MainDashboard/PieChart";
import LongGraph from "../MainDashboard/LongGraph";
import { customerData } from "../../../Constants/constants";

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
        <h2 style={{ paddingBottom: "1rem" }}>Sign up and Deleted customers</h2>
        <div className="charts">
          <LongGraph signUpcolor="#8884d8" leftColor="#413ea0" data={customerData} />
        </div>
      </div>
      <UserTable />
    </div>
  );
};

export default User;
