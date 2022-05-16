const router = require("express").Router();
const Boxs = require("../models/Boxs");

router.post("/api/addboxs", async (req, res) => {
  const boxsname = req.body.BoxName;
  const location = req.body.Location;

  const Box = new Boxs({
    BoxName: boxsname,
    Location: location,
  });

  try {
    await Box.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

router.get("/api/getboxs", async (req, res) => {
  Boxs.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

router.delete("/deleteboxs/:id", async (req, res) => {
  const id = req.params.id;
  await Boxs.findByIdAndRemove(id).exec();
});

module.exports = router;
