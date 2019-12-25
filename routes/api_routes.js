module.exports = function(app) {
  app.post("/app", function(req, res) {
    const email = req.body.email;
    // const message = req.body.message;
    const name = req.body.first + " " + req.body.last;
    const opinion = req.body.opinion;

    console.log(
      "email: " + email,
      "name: " + name,
      "opinion: " + opinion
      // "message: " + message
    );

    const output = `<p> You have a new contact request </p>
      <P> 😎Thank you for taking your time in reaching out, you can also click the link below to set an appointment with me.</p>
      <p>From: ${email}</p>
      <p>opinion: ${opinion}</p>
      <p>Email: ${email}</p>`;

    const nodemailer = require("nodemailer");

    let transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: "bucketlistusa271@gmail.com",
        pass: process.env.EMAIL_PW
      }
    });

    let mailoptions = {
      from: "bucketlistusa271@gmail.com", // sender address
      to: `${email}, robertamoah271@gmail.com`, // list of receivers
      subject: "Website Response", // Subject line
      text: `Hey ${name}`, // plain text body
      html: output
    };

    transporter.sendMail(mailoptions, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("email sent");
      }
    });

    res.send("Email Has been sent, Thank You!");
  });

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
};
