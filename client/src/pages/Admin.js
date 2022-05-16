import React, { useContext, useState } from "react";
import Chart from "../components/Chart";
import Featured from "../components/Featured";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Widget from "../components/Widget";
import "./admin.scss";
import "../components/style/dark.scss";
import { DarkModeContext } from "../components/context/darkModeContext";
const Admin = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
          <div className="charts">
            <Featured />
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
