import axios from "axios";

export default {
  info: function(type, callback) {
    let URL = "/app"; // change to sign in

    axios
      .post(URL, {
        first: type.first,
        last: type.last,
        email: type.email,
        opinion: type.opinion
      })
      .then(function(response) {
        callback(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
