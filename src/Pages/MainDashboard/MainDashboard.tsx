import React from "react";
import Nav from "../../Components/Nav/Nav";
import SideBar from "../../Components/SideBar/SideBar";

const MainDashboard = () => {
  return (
    <div>
      <div className="container">
        <nav>
          <Nav />
        </nav>
        <main>
          <aside className="side-bar">
            <SideBar />
          </aside>
          <main className="main"></main>
        </main>
      </div>
    </div>
  );
};

export default MainDashboard;
