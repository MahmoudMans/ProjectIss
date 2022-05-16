import React from "react";
import AddCourse from "./components/AddCourse";
import AddCohorts from "./components/AddCohorts";
import AddProfessor from "./components/AddProfessor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Courses from "./pages/Courses";
import Teachers from "./pages/Teachers";
import Cohorts from "./pages/Cohorts";
import ErrorPage from "./pages/ErrorPage";
import ToPdf from "./components/ToPdf";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Classrooms from "./components/Classrooms";
import Boxs from "./components/Boxs";
import AddClassrooms from "./components/AddClassrooms";
import AddBoxs from "./components/AddBoxs";
import Booking from "./pages/Booking";
import Chat from "./components/Chat";
import Login from "./pages/Login";
import Classbooking from "./pages/Classbooking";
import Officehours from "./pages/Officehours";
import Unispec from "./components/Unispec";
import MsbStudent from "./components/MsbStudent";
import MedtechStudent from "./components/MedtechStudent";
import LciStudent from "./components/LciStudent";
import AddLci from "./components/AddLci";
import AddMedtech from "./components/AddMedtech";
import AddMsb from "./components/AddMsb";

export default function Webroute() {
  return (
    <div>
      <div className="App">
        {/* <Testmui /> */}
        {/* <Scheduel /> */}
        {/* <AddProfessor /> */}
        {/* <Scheduel /> */}
        {/* <ToPdf /> */}
        {/* <Login /> */}
        {/* <Officehours /> */}
        {/* <Home /> */}
        {/* <Router> */}
        <div className="home">
          <Sidebar />
          <div className="homeContainer">
            <Navbar />

            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path="/Courses" element={<Courses />} />
              <Route path="/Teachers" element={<Teachers />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/Cohorts" element={<Cohorts />} />
              <Route path="/AddCohorts" element={<AddCohorts />} />
              <Route path="/AddCourses" element={<AddCourse />} />
              <Route path="/AddProfessor" element={<AddProfessor />} />
              <Route path="/Scheduel" element={<ToPdf />} />
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
              <Route path="/medtechstudent" element={<MedtechStudent />} />
              <Route path="/lcistudent" element={<LciStudent />} />
              <Route path="/addlci" element={<AddLci />} />
              <Route path="/addmedtech" element={<AddMedtech />} />
              <Route path="/addmsb" element={<AddMsb />} />
            </Routes>
          </div>
        </div>
        {/* </Router> */}
        {/* <ToPdf /> */}
        {/* <ImageCard /> */}
        {/* <AddCourse /> */}
        {/* <AddCohorts /> */}
        {/* <CohortTable /> */}
        {/* <ProfessorCourse /> */}
        {/* <CourseTable /> */}
      </div>
    </div>
  );
}
