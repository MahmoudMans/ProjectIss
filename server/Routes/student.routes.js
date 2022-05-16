const router = require("express").Router();
const MedtechStudent = require("../models/MedtechStudent");
const MsbStudent = require("../models/MsbStudent");
const LciStudent = require("../models/LciStudent");
const nodemailer = require("nodemailer");
var cron = require("node-cron");

router.post("/api/addmsbstudent", async (req, res) => {
  const fullname = req.body.FullName;
  const amounttopay = req.body.AmountToPay;
  const amountpaied = req.body.AmountPaied;
  const remainingamount = req.body.RemainingAmount;
  const finaldeadline = req.body.FinalDeadline;
  const email = req.body.Email;
  const Msb = new MsbStudent({
    FullName: fullname,
    AmountToPay: amounttopay,
    AmountPaied: amountpaied,
    RemainingAmount: remainingamount,
    FinalDeadline: finaldeadline,
    Email: email,
  });

  try {
    await Msb.save();

    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

router.post("/api/addmedtechstudent", async (req, res) => {
  const fullname = req.body.FullName;
  const amounttopay = req.body.AmountToPay;
  const amountpaied = req.body.AmountPaied;
  const remainingamount = req.body.RemainingAmount;
  const finaldeadline = req.body.FinalDeadline;
  const email = req.body.Email;
  const Medtech = new MedtechStudent(
    {
      FullName: fullname,
      AmountToPay: amounttopay,
      AmountPaied: amountpaied,
      RemainingAmount: remainingamount,
      FinalDeadline: finaldeadline,
      Email: email,
    },
    { timestamps: false }
  );

  try {
    await Medtech.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

router.post("/api/addlcistudent", async (req, res) => {
  const fullname = req.body.FullName;
  const amounttopay = req.body.AmountToPay;
  const amountpaied = req.body.AmountPaied;
  const remainingamount = req.body.RemainingAmount;
  const finaldeadline = req.body.FinalDeadline;
  const email = req.body.Email;
  const Lci = new LciStudent({
    FullName: fullname,
    AmountToPay: amounttopay,
    AmountPaied: amountpaied,
    RemainingAmount: remainingamount,
    FinalDeadline: finaldeadline,
    Email: email,
  });

  try {
    await Lci.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

router.get("/api/getmedtechstudent", async (req, res) => {
  MedtechStudent.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    var date1 = "01/12/2018";
    date1 = new Date(date1);
    res.send(result);
    cron.schedule("10 * * * * *", () => {
      result.map((user) => {
        if (user.FinalDeadline > "01/12/2018") {
          try {
            async function main() {
              // securePin.generatePin(4, (pin)=> {
              //      console.log("Pin: " + pin);
              //  })
              let testAccount = await nodemailer.createTestAccount();

              var transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true, // use SSL
                auth: {
                  user: "mahmoudmansouri2001@gmail.com",
                  pass: "Midou2001",
                },
              });

              let info = await transporter.sendMail({
                from: '"Mahmoud Mansouri " <mahmoudmansouri2001@gmail.com>',
                to: `mahmoud.mansouri@medtech.tn`,
                subject: "User information",
                text: "Si ça marche je suis vraiment trop fort",
                html: `<b>Dear lah,</b>
                          <br/>
                          <br/>
                          <b>Walah lak 3adi  </b>
                          <br/>
                          <br/>
                    
                          <br/>
                          <br/>
                          <b> </b>
                          <br/>
                          <br/>
                          <b>Thank you, </b> 
                          <br/>
                          <br/>
                          
                          <b>Admin </b>  
                          `,
              });

              console.log("Message sent: %s", info.messageId);
              // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

              // Preview only available when sending through an Ethereal account
              console.log(
                "Preview URL: %s",
                nodemailer.getTestMessageUrl(info)
              );
              // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            }

            main().catch(console.error);
            res.send("inserted data");
          } catch (err) {
            console.log(err);
          }
        }
      });
    });
  });
});

router.get("/api/getmsbstudent", async (req, res) => {
  MsbStudent.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
    cron.schedule("10 * * * * *", () => {
      result.map((user) => {
        if (user.FinalDeadline > "01/12/2018") {
          try {
            async function main() {
              // securePin.generatePin(4, (pin)=> {
              //      console.log("Pin: " + pin);
              //  })
              let testAccount = await nodemailer.createTestAccount();

              var transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true, // use SSL
                auth: {
                  user: "mahmoudmansouri2001@gmail.com",
                  pass: "Midou2001",
                },
              });

              let info = await transporter.sendMail({
                from: '"Mahmoud Mansouri " <mahmoudmansouri2001@gmail.com>',
                to: `mahmoud.mansouri@medtech.tn`,
                subject: "User information",
                text: "Si ça marche je suis vraiment trop fort",
                html: `<b>Dear lah,</b>
                        <br/>
                        <br/>
                        <b>Walah lak 3adi  </b>
                        <br/>
                        <br/>
                  
                        <br/>
                        <br/>
                        <b> </b>
                        <br/>
                        <br/>
                        <b>Thank you, </b> 
                        <br/>
                        <br/>
                        
                        <b>Admin </b>  
                        `,
              });

              console.log("Message sent: %s", info.messageId);
              // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

              // Preview only available when sending through an Ethereal account
              console.log(
                "Preview URL: %s",
                nodemailer.getTestMessageUrl(info)
              );
              // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            }

            main().catch(console.error);
            res.send("inserted data");
          } catch (err) {
            console.log(err);
          }
        }
      });
    });
  });
});

router.get("/api/getlcistudent", async (req, res) => {
  LciStudent.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
    cron.schedule("10 * * * * *", () => {
      result.map((user) => {
        if (user.FinalDeadline > "01/12/2018") {
          try {
            async function main() {
              // securePin.generatePin(4, (pin)=> {
              //      console.log("Pin: " + pin);
              //  })
              let testAccount = await nodemailer.createTestAccount();

              var transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true, // use SSL
                auth: {
                  user: "mahmoudmansouri2001@gmail.com",
                  pass: "Midou2001",
                },
              });

              let info = await transporter.sendMail({
                from: '"Mahmoud Mansouri " <mahmoudmansouri2001@gmail.com>',
                to: `mahmoud.mansouri@medtech.tn`,
                subject: "User information",
                text: "Si ça marche je suis vraiment trop fort",
                html: `<b>Dear lah,</b>
                          <br/>
                          <br/>
                          <b>Walah lak 3adi  </b>
                          <br/>
                          <br/>
                    
                          <br/>
                          <br/>
                          <b> </b>
                          <br/>
                          <br/>
                          <b>Thank you, </b> 
                          <br/>
                          <br/>
                          
                          <b>Admin </b>  
                          `,
              });

              console.log("Message sent: %s", info.messageId);
              // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

              // Preview only available when sending through an Ethereal account
              console.log(
                "Preview URL: %s",
                nodemailer.getTestMessageUrl(info)
              );
              // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            }

            main().catch(console.error);
            res.send("inserted data");
          } catch (err) {
            console.log(err);
          }
        }
      });
    });
  });
});

module.exports = router;
