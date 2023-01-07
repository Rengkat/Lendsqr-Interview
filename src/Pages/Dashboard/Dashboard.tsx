import { Outlet } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import SideBar from "../../Components/SideBar/SideBar";

const SharedLayout = () => {
  return (
    <div style={{ width: "100%" }}>
      <div>
        <nav>
          <Nav />
        </nav>
        <main
          style={{
            display: "flex",
            alignContent: "center",
            // alignItems: "center",
          }}>
          <div style={{ padding: "1rem 5rem" }}>
            <SideBar />
          </div>
          <div className="otherComponents">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SharedLayout;
