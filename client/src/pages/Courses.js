import React, { useContext, useState } from "react";
import { DarkModeContext } from "../components/context/darkModeContext";
import CourseTable from "../components/CourseTable";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

const Courses = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />

          <CourseTable />
        </div>
      </div>{" "}
    </div>
  );
};

export default Courses;
