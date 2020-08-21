const MainComments = require("../models/comments");

module.exports = {
  Comments: (req, res) => {
    const { name, comment, ip, secretKey } = req.body;

    const newComment = new MainComments({
      name,
      comment,
      hidden: false,
      ip,
      secretKey,
      meta: {
        votes: 0,
        favs: 0,
      },
    });

    newComment.save((data) => {
      res.send("hello");
    });
  },
};
