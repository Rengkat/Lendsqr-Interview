import { useState, Fragment } from "react";
import Form from "../Form/Form";
import SelectBtn from "../SelectBtn/SelectBtn";
import { Link, useNavigate } from "react-router-dom";
import { UserTableDataType, customers, tableHead } from "../../Constants/UserTypes";
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
    setSeeMore(customers.length);
  };
  const handleSeeLess = () => {
    setSeeMore(5);
  };
  return (
    <div className="table-container">
      <div>
        <div className="stylist-table">
          <div className="cation">
            <h2 style={{ padding: ".5rem 0" }}>List of Customers</h2>
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
            {customers.slice(0, seeMore).map((user, i) => {
              return (
                <Fragment key={user.phoneNumber}>
                  <Link to={"/users/1"} className="row">
                    <p style={{ paddingLeft: "1rem" }}>{i + 1}</p>
                    <p>{user.firstName}</p>
                    <p>{user.phoneNumber}</p>
                    <p>{user.address}</p>
                    <p>{user.email}</p>
                    <p>
                      <span
                        className={
                          user.status === "active"
                            ? "active"
                            : user.status === "pending"
                            ? "pending"
                            : "cancel"
                        }>
                        {user.status}
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
