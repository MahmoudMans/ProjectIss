import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import LCI from "../assets/lci.png";
import MSB from "../assets/msb.png";
import MEDTECH from "../assets/medtech.png";
import Navbar from "./navbar/Navbar";
import { DarkModeContext } from "./context/darkModeContext";
function Unispec() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="speuni">
            <Card sx={{ maxWidth: 345 }} className="uniqspe">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={MSB}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    MSB
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to="/msbstudent">
                  <Button variant="contained" color="secondary">
                    Msb
                  </Button>
                </Link>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="uniqspe">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={MEDTECH}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    MEDTECH
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to="/medtechstudent">
                  <Button variant="contained" color="success">
                    Medtech
                  </Button>
                </Link>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }} className="uniqspe">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={LCI}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    LCI
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to="/lcistudent">
                  <Button variant="contained" color="error">
                    LCI
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
          {/* <Stack direction="row" spacing={2}>
            <Link to="/msbstudent">
              <Button color="secondary">Msb</Button>
            </Link>
            <Link to="/medtechstudent">
              <Button variant="contained" color="success">
                Medtech
              </Button>
            </Link>
            <Link to="/lcistudent">
              <Button variant="outlined" color="error">
                LCI
              </Button>
            </Link>
          </Stack> */}
        </div>
      </div>
    </div>
  );
}

export default Unispec;
