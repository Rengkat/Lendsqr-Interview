import "./style.scss";

const DetailsComponent = () => {
  return (
    <div className="top-grid">
      <div className="full-name">
        <p>Full Name</p>
        <h3>Alexander Rengkat</h3>
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
        <p>User ID</p>
        <h3>#12345678234</h3>
      </div>
      <div className="address">
        <p>Delivery Address</p>
        <h3>16,Jos Nigeria</h3>
      </div>
      <div className="join">
        <p>Joint</p>
        <h3>16 December, 2023</h3>
      </div>
    </div>
  );
};

export default DetailsComponent;
