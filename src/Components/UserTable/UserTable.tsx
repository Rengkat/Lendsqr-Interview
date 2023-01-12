import { TbMathSymbols, CgSortAz, BsThreeDotsVertical } from "react-icons/all";
import Form from "../Form/Form";
import SelectBtn from "../SelectBtn/SelectBtn";
import { useNavigate } from "react-router-dom";
import "./style.scss";
interface DataType {
  organization: string;
  username: string;
  email: string;
  phone: string;
  date: string;
  status: string;
}
const datas: DataType[] = [
  {
    organization: "The Catalyst",
    username: "theCatalyst",
    email: "thecatalyst@gmail.com",
    phone: "0806758117",
    date: "May 4, 2022 10AM",
    status: "active",
  },
  {
    organization: "The Catalyst",
    username: "theCatalyst",
    email: "thecatalyst@gmail.com",
    phone: "0806758117",
    date: "May 4, 2022 10AM",
    status: "pending",
  },
  {
    organization: "The Catalyst",
    username: "theCatalyst",
    email: "thecatalyst@gmail.com",
    phone: "0806758117",
    date: "May 4, 2022 10AM",
    status: "blacklisted",
  },
  {
    organization: "The Catalyst",
    username: "theCatalyst",
    email: "thecatalyst@gmail.com",
    phone: "0806758117",
    date: "May 4, 2022 10AM",
    status: "inactive",
  },
  {
    organization: "The Catalyst",
    username: "theCatalyst",
    email: "thecatalyst@gmail.com",
    phone: "0806758117",
    date: "May 4, 2022 10AM",
    status: "active",
  },
  {
    organization: "The Catalyst",
    username: "theCatalyst",
    email: "thecatalyst@gmail.com",
    phone: "0806758117",
    date: "May 4, 2022 10AM",
    status: "blacklisted",
  },
  {
    organization: "The Catalyst",
    username: "theCatalyst",
    email: "thecatalyst@gmail.com",
    phone: "0806758117",
    date: "May 4, 2022 10AM",
    status: "active",
  },
  {
    organization: "The Catalyst",
    username: "theCatalyst",
    email: "thecatalyst@gmail.com",
    phone: "0806758117",
    date: "May 4, 2022 10AM",
    status: "pending",
  },
  {
    organization: "The Catalyst",
    username: "theCatalyst",
    email: "thecatalyst@gmail.com",
    phone: "0806758117",
    date: "May 4, 2022 10AM",
    status: "inactive",
  },
];
const UserTable = () => {
  const navigate = useNavigate();
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <td>
              <div className="td">
                <span>organization</span>
                <span>
                  <CgSortAz fontSize={25} style={{ cursor: "pointer" }} />
                </span>
              </div>
            </td>
            <td>
              <div className="td">
                <span>Username</span>
                <span>
                  <CgSortAz fontSize={25} style={{ cursor: "pointer" }} />
                </span>
              </div>
            </td>
            <td>
              <div className="td">
                <span>Email</span>
                <span>
                  <CgSortAz fontSize={30} style={{ cursor: "pointer" }} />
                </span>
              </div>
            </td>
            <td>
              <div className="td">
                <span>Phone number</span>
                <span>
                  <CgSortAz fontSize={30} style={{ cursor: "pointer" }} />
                </span>
              </div>
            </td>
            <td>
              <div className="td">
                <span>Date Joined</span>
                <span>
                  <CgSortAz fontSize={30} style={{ cursor: "pointer" }} />
                </span>
              </div>
            </td>
            <td>
              <div className="td">
                <span>Status</span>
                <span>
                  <CgSortAz fontSize={30} style={{ cursor: "pointer" }} />
                </span>
              </div>
            </td>
            <td></td>
          </tr>
        </thead>
        {/* ===== onclick disappear=== */}
        {/* <Form /> */}

        <tbody>
          {/* <Form /> */}
          {datas.map((data) => {
            return (
              <tr key={Math.random()}>
                <td>{data.organization}</td>
                <td>{data.username}</td>
                <td>{data.phone}</td>
                <td>{data.email}</td>
                <td>{data.date}</td>
                <td>
                  <p
                    className={
                      data.status === "active"
                        ? "active"
                        : data.status === "inactive"
                        ? "inactive"
                        : data.status === "pending"
                        ? "pending"
                        : "blacklist"
                    }>
                    {data.status}
                  </p>
                </td>
                <td style={{ position: "relative" }}>
                  <BsThreeDotsVertical
                    onClick={() => navigate("/userDetails")}
                    fontSize={20}
                    style={{ cursor: "pointer" }}
                  />
                  {/* <SelectBtn /> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
