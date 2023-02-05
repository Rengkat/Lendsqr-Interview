import { Outlet } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import SideBar from "../../Components/SideBar/SideBar";

const SharedLayout = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#E5E5E5",
        position: "relative",
      }}>
      <div>
        <nav style={{ position: "sticky", inset: 0, zIndex: 110 }}>
          <Nav />
        </nav>
        <main
          style={{
            display: "flex",
            alignContent: "center",
            position: "relative",
            // gap: "5rem",
          }}>
          <div
            style={{
              width: "20%",
              position: "fixed",
              zIndex: 100,
            }}>
            <SideBar />
          </div>
          <div
            style={{
              width: "80%",
              marginLeft: "18rem",
            }}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SharedLayout;
