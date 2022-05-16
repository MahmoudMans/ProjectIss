const router = require("express").Router();
const ClassBooking = require("../models/Classbooking");
const nodemailer = require("nodemailer");

router.post("/api/classbooking", async (req, res) => {
  const fullname = req.body.FullName;
  const email = req.body.Email;
  const studentid = req.body.StudentID;
  const phone = req.body.Phone;
  const date = req.body.Date;
  const timein = req.body.Timein;
  const timeout = req.body.Timeout;
  const reason = req.body.Reason;
  const classname = req.body.ClassName;

  const ClassBookings = new ClassBooking({
    FullName: fullname,
    Email: email,
    StudentID: studentid,
    Phone: phone,
    Date: date,
    Timein: timein,
    Timeout: timeout,
    Reason: reason,
    ClassName: classname,
  });

  try {
    await ClassBookings.save();
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
        to: `${email}`,
        subject: "Class booking",
        text: "Si ça marche je suis vraiment trop fort",
        html: `<b>Dear ${fullname},</b>
              <br/>
              <br/>
              <b>You have booked a class on the date ${date} from ${timein} to ${timeout}.</b>
              <br/>
              <br/>
        
              <br/>
              <br/>
              <b> Please try to come in time and to keep your place clean after you leave. </b>
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
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
