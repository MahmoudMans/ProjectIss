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

function App() {
  return (
    <div className="App">
      {/* <Testmui /> */}
      {/* <Scheduel /> */}
      {/* <AddProfessor /> */}
      {/* <Scheduel /> */}
      {/* <ToPdf /> */}

      <Router>
        {/* <NavBar /> */}
        <div className="home">
          {/* <h1 className="title">Lama dev</h1> */}
          <Sidebar />
          <div className="homeContainer">
            <Navbar />

            {/* <Sidebar />
        <Navbar /> */}
            <Routes>
              <Route path="/" element={<Admin />} />
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
            </Routes>
          </div>
        </div>
      </Router>
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
