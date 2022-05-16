const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const teachersroute = require("./Routes/teachers.routes");
const coursesroute = require("./Routes/courses.routes");
const cohortsroute = require("./Routes/cohorts.routes");
const classroomsroute = require("./Routes/classrooms.routes");
const bookingroute = require("./Routes/booking.routes");
const boxroute = require("./Routes/boxs.routes");
const adminroute = require("./Routes/admin.routes");
const officehoursroute = require("./Routes/officehours.routes");
const classbookingroute = require("./Routes/classbooking.routes");
const studentroute = require("./Routes/student.routes");
const cronfin = require("./cron");
const app = express();
const { Server } = require("socket.io");
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room:${data} `);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log(`User Disconnected: ${socket.id}`);
  });
});

mongoose.connect("mongodb://localhost:27017/pmgsystem", {
  useNewUrlParser: true,
});

app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/", teachersroute);
app.use("/", coursesroute);
app.use("/", classroomsroute);
app.use("/", cohortsroute);
app.use("/", boxroute);
app.use("/", bookingroute);
app.use("/", adminroute);
app.use("/", classbookingroute);
app.use("/", officehoursroute);
app.use("/", studentroute);

cronfin;

server.listen(PORT, () => {
  console.log("Server Running");
});
