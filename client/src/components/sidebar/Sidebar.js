import React, { useContext } from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SchoolIcon from "@mui/icons-material/School";
import FolderSharpIcon from "@mui/icons-material/FolderSharp";
import CalendarTodaySharpIcon from "@mui/icons-material/CalendarTodaySharp";
import CheckBoxOutlineBlankSharpIcon from "@mui/icons-material/CheckBoxOutlineBlankSharp";
import BookmarkAddSharpIcon from "@mui/icons-material/BookmarkAddSharp";
import AppSettingsAltSharpIcon from "@mui/icons-material/AppSettingsAltSharp";
import ChatBubbleSharpIcon from "@mui/icons-material/ChatBubbleSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import BoyIcon from "@mui/icons-material/Boy";
import PaidIcon from "@mui/icons-material/Paid";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/darkModeContext";

function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">SMU Dashboard</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/Admin">
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutlinedIcon className="icon" />
            <Link to="/Teachers">
              <span>Teachers</span>
            </Link>
          </li>
          <li>
            <SchoolIcon className="icon" />
            <Link to="/Classrooms">
              <span>Classrooms</span>
            </Link>
          </li>
          <li>
            <FolderSharpIcon className="icon" />
            <Link to="/Courses">
              <span>Courses</span>
            </Link>
          </li>
          <li>
            <BoyIcon className="icon" />
            <Link to="/Cohorts">
              <span>Cohorts</span>
            </Link>
          </li>
          <li>
            <CheckBoxOutlineBlankSharpIcon className="icon" />
            <Link to="/Boxs">
              <span>Boxs</span>
            </Link>
          </li>
          <p className="title"> FEATURES</p>
          <li>
            <CalendarTodaySharpIcon className="icon" />
            <Link to="/Scheduel">
              <span>Schueling</span>
            </Link>
          </li>
          <li>
            <BookmarkAddSharpIcon className="icon" />
            <Link to="/Bookings">
              <span>Box Booking</span>
            </Link>
          </li>
          <li>
            <AccountBalanceIcon className="icon" />
            <Link to="/ClassBookings">
              <span>Class Booking</span>
            </Link>
          </li>

          <li>
            <ChatBubbleSharpIcon className="icon" />
            <Link to="/Chat">
              <span>Chat</span>
            </Link>
          </li>
          <li>
            <PaidIcon className="icon" />
            <Link to="/unispec">
              <span>Payement</span>
            </Link>
          </li>
          <li>
            <AppSettingsAltSharpIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <LogoutSharpIcon className="icon" />
            <Link to="/">
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
}

export default Sidebar;
