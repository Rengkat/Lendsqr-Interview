import { useState, Fragment } from "react";
import Form from "../Form/Form";
import SelectBtn from "../SelectBtn/SelectBtn";
import { Link, useNavigate } from "react-router-dom";
import { UserTableDataType, stylists, tableHead } from "../../Constants/UserTypes";
import "./style.scss";
//

interface TableProps {
  data: UserTableDataType | undefined;
  isFetching: any;
}

const UserTable = () => {
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
    <div className="table-container">
      <div>
        <div className="stylist-table">
          <div className="cation">
            <h2 style={{ padding: ".5rem 0" }}>List of Users</h2>
          </div>
          <div className="head">
            {tableHead.map((title) => {
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
                <Fragment key={stylist.orgName}>
                  <Link to={"/users/1"} className="row">
                    <p style={{ paddingLeft: "1rem" }}>{i + 1}</p>
                    <p style={{ textTransform: "capitalize" }}>{stylist.orgName}</p>
                    <p>{stylist.email}</p>
                    <p>{stylist.phoneNumber}</p>
                    <p>{stylist.address}</p>
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
    </div>
  );
};

export default UserTable;
