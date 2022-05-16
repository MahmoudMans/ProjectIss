import React, { useContext, useState } from "react";
import CohortTable from "../components/CohortTable";
import { DarkModeContext } from "../components/context/darkModeContext";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

const Cohorts = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <CohortTable />
        </div>
      </div>
    </div>
  );
};

export default Cohorts;
