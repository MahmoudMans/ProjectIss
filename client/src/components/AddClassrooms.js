import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Axios from "axios";
import Button from "@mui/material/Button";
import { Avatar, Grid, Paper, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import { DarkModeContext } from "./context/darkModeContext";

export default function AddClassrooms() {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0, padding: "10px" };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const courseform = { padding: "10px" };
  const formstyle = { margin: 10 };
  const [ClassName, setClassName] = useState("");
  const [Location, setLocation] = useState("");
  const [Size, setSize] = useState(0);
  const [TypeOfClassrooms, setTypeOfClassrooms] = useState("");
  const { darkMode } = useContext(DarkModeContext);
  const addToList = () => {
    Axios.post("http://localhost:5000/api/addclassrooms", {
      ClassName: ClassName,
      Location: Location,
      Size: Size,
      TypeOfClassrooms: TypeOfClassrooms,
    });
  };
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div>
            <Grid>
              <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                  <Avatar style={avatarStyle}>
                    <AddCircleOutlineIcon />
                  </Avatar>
                  <h2 style={headerStyle}>Add Courses</h2>
                  <div style={courseform}>
                    <Typography variant="caption">
                      Please fill the form this to create an account
                    </Typography>
                  </div>
                </Grid>
                <form>
                  <TextField
                    label="ClassName"
                    style={formstyle}
                    onChange={(event) => {
                      setClassName(event.target.value);
                    }}
                  />
                  <TextField
                    label="Location"
                    style={formstyle}
                    onChange={(event) => {
                      setLocation(event.target.value);
                    }}
                  />
                  <TextField
                    label="Size of the class"
                    style={formstyle}
                    onChange={(event) => {
                      setSize(event.target.value);
                    }}
                  />
                  <TextField
                    label="Type of classrooms"
                    style={formstyle}
                    onChange={(event) => {
                      setTypeOfClassrooms(event.target.value);
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={addToList}
                  >
                    Add
                  </Button>
                </form>
              </Paper>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
