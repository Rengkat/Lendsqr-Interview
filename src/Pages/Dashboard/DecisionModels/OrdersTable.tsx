import { useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { UserTableDataType, customers, tableHead } from "../../Constants/UserTypes";
import "./style.scss";
//
interface Product {
  id: string;
  name: string;
  price: string;
  amtPayed: string;
  status: string;
}
interface TableProps {
  data: Product[];
  tableHead: string[];
}

const OrderTable = ({ data, tableHead }: TableProps) => {
  const [seeMore, setSeeMore] = useState(5);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const handleReadMore = () => {
    setSeeMore(data.length);
  };
  const handleSeeLess = () => {
    setSeeMore(5);
  };
  return (
    <div className="table-container">
      <div>
        <div className="stylist-table">
          <div className="cation">
            <h2 style={{ padding: ".5rem 0" }}>List of Orders</h2>
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
            {data.slice(0, seeMore).map((product: Product, i) => {
              return (
                <Fragment key={product.id}>
                  <Link to={"/users/1"} className="row">
                    <p style={{ paddingLeft: "1rem" }}>{i + 1}</p>
                    <p>{product.name}</p>
                    <p>#{product.id.toUpperCase()}</p>
                    <p>{product.price}</p>
                    <p>{product.amtPayed}</p>
                    <p>
                      <span
                        className={
                          product.status === "delivered"
                            ? "active"
                            : product.status === "pending"
                            ? "pending"
                            : "cancel"
                        }>
                        {product.status}
                      </span>
                    </p>
                  </Link>
                </Fragment>
              );
            })}
            {/* {data.slice(0, seeMore).map(product) => {
              return (
                <Fragment key={product.id}>
                  <Link to={"/users/1"} className="row">
                    <p style={{ paddingLeft: "1rem" }}>{i + 1}</p>
                    <p>{product.firstName}</p>
                    <p>{product.phoneNumber}</p>
                    <p>{product.address}</p>
                    <p>{product.email}</p>
                    <p>
                      <span
                        className={
                          product.status === "active"
                            ? "active"
                            : user.status === "pending"
                            ? "pending"
                            : "cancel"
                        }>
                        {product.status}
                      </span>
                    </p>
                  </Link>
                </Fragment>
              );
            })} */}
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

export default OrderTable;
