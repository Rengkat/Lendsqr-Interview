import React from "react";
import PieCharts from "../MainDashboard/PieChart";
import ProductsTable from "./ProductTable";
import { products, productsTableHead } from "../../../Constants/UserTypes";
import "./style.scss";
const Products = () => {
  return (
    <div className="productContainer">
      <PieCharts />
      <ProductsTable tableHead={productsTableHead} data={products} />
    </div>
  );
};

export default Products;
