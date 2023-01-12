import { Outlet } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import SideBar from "../../Components/SideBar/SideBar";

const SharedLayout = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "#E5E5E5" }}>
      <div>
        <nav>
          <Nav />
        </nav>
        <main
          style={{
            display: "flex",
            alignContent: "center",
            // gap: "5rem",
          }}>
          <div style={{ width: "20%" }}>
            <SideBar />
          </div>
          <div style={{ width: "80%" }}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SharedLayout;
