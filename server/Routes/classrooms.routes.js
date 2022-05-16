const router = require("express").Router();
const Classrooms = require("../models/Classrooms");

router.post("/api/addclassrooms", async (req, res) => {
  const classname = req.body.ClassName;
  const location = req.body.Location;
  const size = req.body.Size;
  const typeofclassrooms = req.body.TypeOfClassrooms;

  const Classroom = new Classrooms({
    ClassName: classname,
    Location: location,
    Size: size,
    TypeOfClassrooms: typeofclassrooms,
  });

  try {
    await Classroom.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

router.get("/api/getclassrooms", async (req, res) => {
  Classrooms.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

router.delete("/deleteclassrooms/:id", async (req, res) => {
  const id = req.params.id;
  await Classrooms.findByIdAndRemove(id).exec();
});

module.exports = router;
