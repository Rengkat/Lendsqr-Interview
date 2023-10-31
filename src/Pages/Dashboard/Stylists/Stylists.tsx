import { Fragment, useState } from "react";
import LongGraph from "../MainDashboard/LongGraph";
import SpiderChart from "../MainDashboard/SpiderChart";
import PieCharts from "../MainDashboard/PieChart";
import "./styles.scss";
import UserSummary from "../../../Components/UserSummary/UserSummary";
import { stylistTableHead, stylists } from "../../../Constants/UserTypes";
import { Link, useNavigate } from "react-router-dom";
import StylistsTable from "./StylistTable";
import { StylistData } from "../../../Constants/constants";
const Stylists = () => {
  // const stylistTableHead = ["s/No.", "company", "email", "phone", "location", "status"];
  const [seeMore, setSeeMore] = useState(5);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const handleReadMore = () => {
    setSeeMore(stylists.length);
  };
  const handleSeeLess = () => {
    setSeeMore(5);
  };
  return (
    <div className="stylist-main-container">
      <UserSummary />
      <div className="long-graph">
        <h1 style={{ padding: "1rem 0" }}>Stylist signed</h1>
        <LongGraph leftColor="#0810ff" signUpcolor="#ff1408" data={StylistData} />
      </div>
      <StylistsTable />
    </div>
  );
};

export default Stylists;
