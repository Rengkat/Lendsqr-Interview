import "./style.scss";
import OrderTable from "./OrdersTable";
import { orderProducts, orderTableHead } from "../../../Constants/UserTypes";
import OrderChart from "./OrdersChart";
const Orders = () => {
  return (
    <div className="orderContainer">
      {/* <ColorPiechart /> */}
      <div className="chrt">
        <h1>Orders</h1>
        <OrderChart />
      </div>
      <OrderTable data={orderProducts} tableHead={orderTableHead} />
    </div>
  );
};

export default Orders;
