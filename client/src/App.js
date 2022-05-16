import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import CourseTable from "./components/CourseTable";
import ProfessorCourse from "./components/ProfessorCourse";
import CohortTable from "./components/CohortTable";
import AddCourse from "./components/AddCourse";
import { ImageCard } from "./components/ImageCard";
import NavBar from "./components/NavBar";
import AddCohorts from "./components/AddCohorts";
import AddProfessor from "./components/AddProfessor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Courses from "./pages/Courses";
import Teachers from "./pages/Teachers";
import Cohorts from "./pages/Cohorts";
import ErrorPage from "./pages/ErrorPage";
// import Scheduel from "./components/Scheduel";
import Testmui from "./components/Testmui";
import Scheduel from "./components/Scheduel";
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
import Home from "./pages/Home";
import Unispec from "./components/Unispec";
import MsbStudent from "./components/MsbStudent";
import MedtechStudent from "./components/MedtechStudent";
import LciStudent from "./components/LciStudent";
import AddLci from "./components/AddLci";
import AddMedtech from "./components/AddMedtech";
import AddMsb from "./components/AddMsb";
import Loginadmin from "./pages/Loginadmin";

function App() {
  return (
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

          {/* <Routes>
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
            <Route path="/addmsb" element={<AddMsb />} /> */}
          {/* <Route path="/login" element={<Loginadmin />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}
          {/* </Routes> */}
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
  );
}

export default App;
