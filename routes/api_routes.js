const mainController = require("../controllers/email");
const postComments = require("../controllers/comments");
module.exports = function (app) {
  app.route("/emailSends").post(mainController.sendEmail);
  app.route("/comments").post(postComments.Comments);
};
