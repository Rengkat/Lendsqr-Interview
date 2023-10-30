import "./style.scss";
import im from "../../../../assets/My project-1 (19).png";
import TableComp from "../TableComp";
const subtitle = ["S/NO.", "product name", "image", "price", "amount payed", "action"];

const products = [
  { name: "african black shirt", image: im, price: 27000, amount: 12000 },
  { name: "african black shirt", image: im, price: 27000, amount: 12000 },
];
const UserOrders = () => {
  return (
    <div>
      <TableComp products={products} subtitle={subtitle} />
    </div>
  );
};

export default UserOrders;
