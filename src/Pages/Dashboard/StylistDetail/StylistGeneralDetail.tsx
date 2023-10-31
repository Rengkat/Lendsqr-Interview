import React from "react";

const StylistGeneralDetail = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h2 className="heading">Personal Information</h2>
      <div className="top-grid">
        <div className="full-name">
          <p>Company name</p>
          <h3>Alexander FashionHub</h3>
        </div>
        <div className="phone-no">
          <p>Phone number</p>
          <h3>080868486879</h3>
        </div>
        <div className="email">
          <p>Email address</p>
          <h3>rengkat@gmail.com</h3>
        </div>

        <div className="bvn">
          <p>Company ID</p>
          <h3>#12345678234</h3>
        </div>
        <div className="address">
          <p>Main Address</p>
          <h3>16,Jos Nigeria</h3>
        </div>
        <div className="join">
          <p>Joint</p>
          <h3>16 December, 2023</h3>
        </div>
      </div>
      <div className="top-grid-education">
        <div className="full-name">
          <p>Twitter</p>
          <h3>Nill</h3>
        </div>
        <div className="phone-no">
          <p>facebook</p>
          <h3>Nill</h3>
        </div>
        <div className="email">
          <p>instagram</p>
          <h3>Nill</h3>
        </div>
        <div className="email">
          <p>whatApp</p>
          <h3>Nill</h3>
        </div>
      </div>
      <div className="top-grid-education">
        <div className="full-name">
          <p>Number of products</p>
          <h3>Nill</h3>
        </div>
        <div className="phone-no">
          <p>Alternative address</p>
          <h3>Nill</h3>
        </div>
        <div className="email">
          <p> Alternative phone</p>
          <h3>Nill</h3>
        </div>
      </div>
    </div>
  );
};

export default StylistGeneralDetail;
