import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Loginadmin from "./pages/Loginadmin";
import Classbooking from "./pages/Classbooking";
import Officehours from "./pages/Officehours";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin";
import Courses from "./pages/Courses";
import Teachers from "./pages/Teachers";
import ErrorPage from "./pages/ErrorPage";
import Cohorts from "./pages/Cohorts";
import AddCohorts from "./components/AddCohorts";
import AddCourse from "./components/AddCourse";
import AddProfessor from "./components/AddProfessor";
import ToPdf from "./components/ToPdf";
import Classrooms from "./components/Classrooms";
import Boxs from "./components/Boxs";
import AddClassrooms from "./components/AddClassrooms";
import AddBoxs from "./components/AddBoxs";
import Chat from "./components/Chat";
import Unispec from "./components/Unispec";
import MsbStudent from "./components/MsbStudent";
import Medtechstudent from "./components/MedtechStudent";
import LciStudent from "./components/LciStudent";
import AddLci from "./components/AddLci";
import AddMedtech from "./components/AddMedtech";
import AddMsb from "./components/AddMsb";
import StudentBox from "./pages/StudentBox";
import StudentClass from "./pages/StudentClass";
import "./components/style/dark.scss";
import { DarkModeContextProvide } from "./components/context/darkModeContext";

ReactDOM.render(
  <div>
    <DarkModeContextProvide>
      <div>
        <BrowserRouter>
          {/* <App /> */}
          {/* <Login /> */}
          {/* <Home /> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ClassBookings" element={<Classbooking />} />
            <Route path="/officehourbooking" element={<Officehours />} />
            <Route path="/Bookings" element={<Booking />} />
            <Route path="/login" element={<Loginadmin />} />
            <Route path="/Scheduel" element={<ToPdf />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Teachers" element={<Teachers />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/Cohorts" element={<Cohorts />} />
            <Route path="/AddCohorts" element={<AddCohorts />} />
            <Route path="/AddCourses" element={<AddCourse />} />
            <Route path="/AddProfessor" element={<AddProfessor />} />
            <Route path="/studbox" element={<StudentBox />} />
            <Route path="/Classrooms" element={<Classrooms />} />
            <Route path="/Boxs" element={<Boxs />} />
            <Route path="/AddClassrooms" element={<AddClassrooms />} />
            <Route path="/AddBoxs" element={<AddBoxs />} />
            <Route path="/Bookings" element={<Booking />} />
            <Route path="/ClassBookings" element={<Classbooking />} />
            <Route path="/Chat" element={<Chat />} />
            <Route path="/officehourbooking" element={<Officehours />} />
            <Route path="/unispec" element={<Unispec />} />
            <Route path="/msbstudent" element={<MsbStudent />} />
            <Route path="/medtechstudent" element={<Medtechstudent />} />
            <Route path="/lcistudent" element={<LciStudent />} />
            <Route path="/addlci" element={<AddLci />} />
            <Route path="/addmedtech" element={<AddMedtech />} />
            <Route path="/addmsb" element={<AddMsb />} />
            <Route path="/studclass" element={<StudentClass />} />
          </Routes>
        </BrowserRouter>
      </div>
    </DarkModeContextProvide>
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
