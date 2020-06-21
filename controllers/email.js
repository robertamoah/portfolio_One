const nodemailer = require("nodemailer");

module.exports = {
  sendEmail: function (req, res) {
    console.log(req.body);
    // checks to see if email is empty
    if (req.body.email == "") {
      return res.send(
        JSON.stringify({
          message: "email empty",
          status: 400,
        })
      );
    } else if (req.body.email) {
      // check to see if email is right
      if (checkEmailReal() === false)
        return res.send(
          JSON.stringify({
            message: "check email",
            status: 400,
          })
        );
      function checkEmailReal() {
        const email = [...req.body.email];
        let result = false;
        for (const char of email) {
          if (char === "@") {
            result = true;
          }
        }
        return result;
      }
    }

    const email = req.body.email;
    const name = req.body.firstName + " " + req.body.lastName;
    const opinion = req.body.opinion;
    console.log({
      name,
      opinion,
      email,
    });

    // basaic HTML content with Tmeplate String
    const output = `<p> You have a new contact request </p>
       <P> Thank you for taking your time in reaching out, you can also click the link below to set an appointment with me.</p>
       <p>From: Robert Pittman</p>
       <p>Your opinion: ${opinion}</p>
       `;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const myEmail = "robertamoah271@gmail.com";

    let mailoptions = {
      // sender address
      from: process.env.EMAIL,
      // list of receivers
      to: [email, myEmail],
      // Subject line
      subject: "Website Response",
      // plain text body
      text: `Hey ${name}`,
      html: output,
    };

    // error handdling
    transporter.sendMail(mailoptions, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // message back after the message has been sent
        const mainMessage = JSON.stringify({
          message: "Email Sent",
          status: 200,
        });

        res.send(mainMessage);
      }
    });
  },
};
