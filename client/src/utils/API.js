import axios from "axios";

export default {
  info: function (type, callback) {
    let URL = "/emailSends"; // change to sign in

    axios
      .post(URL, {
        firstName: type.firstName,
        lastName: type.lastName,
        email: type.email,
        opinion: type.opinion,
      })
      .then(function (response) {
        callback(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
