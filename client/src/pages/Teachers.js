import React, { useContext, useState } from "react";
import { DarkModeContext } from "../components/context/darkModeContext";
import Navbar from "../components/navbar/Navbar";
import ProfessorCourse from "../components/ProfessorCourse";
import Sidebar from "../components/sidebar/Sidebar";

const Teachers = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <ProfessorCourse />
        </div>
      </div>
    </div>
  );
};

export default Teachers;
