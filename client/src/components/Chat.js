import React, { useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import Chatui from "./Chatui";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Axios from "axios";
import Paper from "@mui/material/Paper";
import "./Chat.css";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import { DarkModeContext } from "./context/darkModeContext";

const socket = io.connect("http://localhost:5000");

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Chat() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [professorList, setProfessorList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5000/api/getteachers").then((response) => {
      setProfessorList(response.data);
    });
  }, []);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="chatco">
            <TableContainer
              sx={{ width: 700, maxWidth: "100%" }}
              component={Paper}
            >
              <Table sx={{ minWidth: 100 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name of the professors</TableCell>
                    <TableCell align="right">Room ID</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {professorList.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.Name}
                      </TableCell>
                      <TableCell align="right">{row.RoomId}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="chatapp">
              {!showChat ? (
                <div className="joinChatContainer">
                  <h3>Join A Chat</h3>
                  <input
                    type="text"
                    placeholder="John..."
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Room ID..."
                    onChange={(event) => {
                      setRoom(event.target.value);
                    }}
                  />
                  <button onClick={joinRoom}>Join a Room</button>
                </div>
              ) : (
                <Chatui socket={socket} username={username} room={room} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
