import { Fragment, useState } from "react";
import LongGraph from "../MainDashboard/LongGraph";
import SpiderChart from "../MainDashboard/SpiderChart";
import PieCharts from "../MainDashboard/PieChart";
import "./styles.scss";
import UserSummary from "../../../Components/UserSummary/UserSummary";
import { stylistTableHead, stylists } from "../../../Constants/UserTypes";
import { Link, useNavigate } from "react-router-dom";
const StylistsTable = () => {
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
    <div className="stylistContainer">
      <div className="stylist-table">
        <div className="cation">
          <h2 style={{ padding: ".5rem 0" }}>List of Stylist</h2>
        </div>
        <div className="head">
          {stylistTableHead.map((title) => {
            return (
              <Fragment key={title}>
                <p>{title}</p>
              </Fragment>
            );
          })}
        </div>
        <div className="table-body-style">
          {stylists.slice(0, seeMore).map((stylist, i) => {
            return (
              <Fragment key={stylist.company}>
                <Link to={"/stylist/1"} className="row">
                  <p style={{ paddingLeft: "1rem" }}>{i + 1}</p>
                  <p style={{ textTransform: "capitalize" }}>{stylist.company}</p>
                  <p>{stylist.phoneNumber}</p>
                  <p>{stylist.address}</p>
                  <p>{stylist.email}</p>
                  <p>
                    <span
                      className={
                        stylist.status === "active"
                          ? "active"
                          : stylist.status === "pending"
                          ? "pending"
                          : "cancel"
                      }>
                      {stylist.status}
                    </span>
                  </p>
                </Link>
              </Fragment>
            );
          })}
        </div>
        <div className="btn">
          {seeMore === 5 ? (
            <button onClick={handleReadMore}>See more</button>
          ) : (
            <button onClick={handleSeeLess}>See less</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StylistsTable;
