const mainController = require("../controllers/email");

module.exports = function (app) {
  app.route("/emailSends").post(mainController.sendEmail);
};
