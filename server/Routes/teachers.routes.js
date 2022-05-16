const router = require("express").Router();
const Teacher = require("../models/Teacher");

router.post("/api/addteachers", async (req, res) => {
  const teacherId = req.body.Id;
  const teacherName = req.body.Name;
  const teacherEmail = req.body.Email;
  const teacherCourse = req.body.Course;
  const teacherFreeDay = req.body.Freeday;
  const teacherRoomId = req.body.RoomId;
  const teacher = new Teacher({
    Id: teacherId,
    Name: teacherName,
    Email: teacherEmail,
    Course: teacherCourse,
    Freeday: teacherFreeDay,
    RoomId: teacherRoomId,
  });

  try {
    await teacher.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

router.get("/api/getteachers", async (req, res) => {
  Teacher.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

router.delete("/deleteteachers/:id", async (req, res) => {
  const id = req.params.id;
  await Teacher.findByIdAndRemove(id).exec();
});

router.put("/updateteachers", async (req, res) => {
  const newName = req.body.newName;
  const id = req.body.id;
  try {
    await Teacher.findByIdAndUpdate(id, (error, teacherToUpdate) => {
      teacherToUpdate.Name = newName;
      teacherToUpdate.save();
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
