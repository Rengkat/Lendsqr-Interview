import React from "react";
import { Fragment } from "react";

const TableComp = ({ subtitle, products }: any) => {
  return (
    <div>
      <aside className="title">
        {subtitle.map((title: any) => {
          return (
            <Fragment key={title}>
              <h5 key={title}>{title}</h5>
            </Fragment>
          );
        })}
      </aside>
      <div className="tableBody">
        {products.map((product: any, i: any) => {
          return (
            <Fragment key={i}>
              <div className="table-content">
                <p>{i + 1}</p>
                <p className="name">{product.name}</p>
                <img src={product.image} alt="" />
                <p>{product.price}</p>
                <p>{product.amount}</p>
                <div>
                  <button>Remove</button>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default TableComp;
