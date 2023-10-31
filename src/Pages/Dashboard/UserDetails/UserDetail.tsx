import "./style.scss";
import { Outlet, useParams } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { useGetUserDetailQuery } from "../../../Redux/Api/UserApi";
import { useDispatch } from "react-redux";
import { updateStatus } from "../../../Redux/Features/LoginSlice";

// type ContextType = { user: User | null };
const UserDetailLayOut = () => {
  // USERID=============
  const { userID }: any = useParams();
  const { data, isLoading } = useGetUserDetailQuery(userID);
  const dispatch = useDispatch();
  const handleBlacklist = (id: any) => {
    dispatch(updateStatus(id));
    console.log("first");
  };
  return (
    <div className="detail-container">
      <Link to="/users" className="arrow">
        <HiArrowLongLeft fontSize={30} /> <p>Back to User</p>
      </Link>
      <div className="sub">
        <h1>User Details</h1>
        <div className="btns">
          <button className="blk-btn" onClick={(e) => handleBlacklist(data?.id)}>
            BLACKLIST
          </button>
          <button className="act-btn">ACTIVE USER</button>
        </div>
      </div>
      <div className="details-heading">
        <div className="detail-profile">
          <div className="left">
            <div className="image">
              {/* <img className="image" src={data?.profile.avatar} alt="image" /> */}
              <AiOutlineUser fontSize={30} />
            </div>
            <div className="name">
              <h1>
                Alexander Rengkat
                {data?.profile.lastName} {data?.profile.firstName}
              </h1>
              <p>12, Jos, Plateau state{data?.profile.address}</p>
              <p>#234567563</p>
            </div>
          </div>
        </div>
        <div className="links">
          <NavLink className="link" to="generalDetails">
            User Details
          </NavLink>

          <NavLink className="link" to="orders">
            Orders
          </NavLink>

          <NavLink className="link" to="cart">
            Cart Products
          </NavLink>

          <NavLink className="link" to="wishlist">
            wishlist
          </NavLink>
        </div>
      </div>
      <div className="main-detail">
        <div className="containerUserDetail">
          <Outlet context={{ data }} />
        </div>
      </div>
    </div>
  );
};

export default UserDetailLayOut;
