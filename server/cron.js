const cron = require("node-cron");
const nodemailer = require("nodemailer");
const MedtechStudent = require("./models/MedtechStudent");
const LciStudent = require("./models/MedtechStudent");
const MsbStudent = require("./models/MedtechStudent");

const emailfin = cron.schedule("* 59 23 * * *", function () {
  console.log("hi scheduel");

  LciStudent.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    var date1 = "01/12/2018";
    date1 = new Date(date1);

    result.map((user) => {
      console.log(user.FinalDeadline);
      if (user.FinalDeadline > date1) {
        try {
          async function main() {
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
              to: `${user.Email}`,
              subject: "Deadline Payment",
              text: "Si ça marche je suis vraiment trop fort",
              html: `<b>Dear Student,</b>
                          <br/>
                          <br/>
                          <b>The deadline payment is over due  </b>
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
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
          }

          main().catch(console.error);
        } catch (err) {
          console.log(err);
        }
      }
    });
  });

  MsbStudent.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    var date1 = "01/12/2018";
    date1 = new Date(date1);

    result.map((user) => {
      console.log(user.FinalDeadline);
      if (user.FinalDeadline > date1) {
        try {
          async function main() {
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
              to: `${user.Email}`,
              subject: "Deadline Payment",
              text: "Si ça marche je suis vraiment trop fort",
              html: `<b>Dear Student,</b>
                          <br/>
                          <br/>
                          <b>The deadline payment is over due  </b>
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
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
          }

          main().catch(console.error);
        } catch (err) {
          console.log(err);
        }
      }
    });
  });
  MedtechStudent.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    var date1 = "01/12/2018";
    date1 = new Date(date1);

    result.map((user) => {
      console.log(user.FinalDeadline);
      if (user.FinalDeadline > date1) {
        try {
          async function main() {
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
              to: `${user.Email}`,
              subject: "Deadline Payment",
              text: "Si ça marche je suis vraiment trop fort",
              html: `<b>Dear Student,</b>
                          <br/>
                          <br/>
                          <b>The deadline payment is over due  </b>
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
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
          }

          main().catch(console.error);
        } catch (err) {
          console.log(err);
        }
      }
    });
  });
});

/**
 * 
 *  MedtechStudent.find({}, (err, result) => {
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
 */

module.exports = emailfin;
