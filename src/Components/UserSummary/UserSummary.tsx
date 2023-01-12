import {
  GrDocumentStore,
  GrStorage,
  FaUserFriends,
  FaUsers,
} from "react-icons/all";
import "./stylle.scss";

const me: number[] = [1, 4, 5, 3];
const UserSummary = () => {
  return (
    <div className="User-container">
      <h1>Users</h1>
      <div className="flex">
        {me.map((detail) => {
          return (
            <div className="box" key={detail}>
              <div className="icon">
                <FaUsers />
              </div>
              <p>Users</p>
              <h1>2,345</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserSummary;
