import React from "react";
import { makeStyles } from "@mui/styles";
import { CssBaseline } from "@mui/material";
import Header from "../components/Header";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background: "none",
    "& .MuiAppBar-root": {
      background: "none",
    },
  },
  appbars: {
    background: "none",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      {/* <Link to="/login">
        <button>Login</button>
      </Link> */}
    </div>
  );
  //className={classes.root}
}

export default Home;
