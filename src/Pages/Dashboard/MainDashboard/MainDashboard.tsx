import UserSummary from "../../../Components/UserSummary/UserSummary";
import Spread from "./Spread";
import { useGetUsersQuery } from "../../../Redux/Api/UserApi";
import "./Style.scss";
import UserTable from "../../../Components/UserTable/UserTable";
import StylistsTable from "../Stylists/StylistTable";

const MainDashboard = () => {
  const { data, isFetching } = useGetUsersQuery(undefined);
  const tenCustomer = data?.slice(0, 10);

  return (
    <div className="containerDash">
      <UserSummary />
      <div className="top-charts">
        {/* <Barchat /> */}
        <Spread />
        <div className="bar-chart">
          <div
            style={{
              padding: "1rem 0",
            }}>
            MONTHLY SALES
          </div>
        </div>
      </div>

      <UserTable />
      <StylistsTable />
    </div>
  );
};

export default MainDashboard;
