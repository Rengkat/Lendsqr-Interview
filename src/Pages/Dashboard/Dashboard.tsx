import { Outlet } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import SideBar from "../../Components/SideBar/SideBar";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { openSideBar } from "../../Redux/Features/LoginSlice";
const SharedLayout = () => {
  const { isSideBarOpen } = useSelector((store: any) => store.user);
  const dispatch = useDispatch();
  return (
    <div className="main-container">
      <div className="contain">
        <nav>
          <Nav />
        </nav>
        <main>
          <div
            onClick={() => dispatch(openSideBar())}
            className={`${isSideBarOpen ? "sidebar-in" : "sidebar-out"} overlay`}>
            <aside className="sidebar">
              <SideBar />
            </aside>
          </div>
          <div style={{ background: "blue" }}>
            <div className="large-screen">
              <SideBar />
            </div>
          </div>
          <div className="mainContain">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SharedLayout;
