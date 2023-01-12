import UserSummary from "../../../Components/UserSummary/UserSummary";
import UserTable from "../../../Components/UserTable/UserTable";
import UserDetail from "../UserDetails/UserDetail";

const User = () => {
  return (
    <div>
      <UserSummary />
      <UserTable />
      {/* <UserDetail /> */}
    </div>
  );
};

export default User;
