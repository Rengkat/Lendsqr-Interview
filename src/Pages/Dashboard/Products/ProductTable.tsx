import { useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { UserTableDataType, customers, tableHead } from "../../Constants/UserTypes";
import "./style.scss";
//
interface Product {
  id: string;
  name: string;
  price: string;
  quantity: number;
  inStock: boolean;
}
interface TableProps {
  data: Product[];
  tableHead: string[];
}

const ProductsTable = ({ data, tableHead }: TableProps) => {
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
            <h2 style={{ padding: ".5rem 0" }}>List of Products</h2>
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
                    <p style={{ textTransform: "capitalize" }}>{product.name}</p>
                    <p>#{product.id.toUpperCase().slice(0, 7)}</p>
                    <p>{product.price}</p>
                    <p>{product.quantity}</p>
                    <p>
                      <span className={product.inStock ? "active" : "cancel"}>
                        {product.inStock ? "Yes" : "No!"}
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

export default ProductsTable;
