const nodemailer = require("nodemailer");

module.exports = {
  sendEmail: function (req, res) {
    console.log(req.body);
    // checks to see if email is empty
    if (req.body.email == "") {
      return res.send(
        JSON.stringify({
          message: "Email Must Be Fill",
          status: 400,
        })
      );
    } else if (
      req.body.firstName == "" ||
      req.body.lastName == "" ||
      req.body.opinion == ""
    ) {
      return res.send(
        JSON.stringify({
          message: "Fill in all Fields",
          status: 400,
        })
      );
    } else if (req.body.email || req.body.email == "") {
      // check to see if email is right
      if (checkEmailReal() === false)
        return res.send(
          JSON.stringify({
            message: "Email Must Be Valid",
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
    const output = `<p> 
    You have a new contact request 
    </p>
       <P> Thank you for taking your time in reaching out, you can also call me at #973-441-0071</p>
       <p>From: ${name}</p>
       <p>Your opinion: ${opinion}</p>
       `;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      // secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    let mailoptions = {
      // sender address
      from: process.env.EMAIL,
      // list of receivers
      to: email,

      cc: "robertamoah271@gmail.com",
      // Subject line
      subject: "Robert Pittman Website Response",
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
