const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AU3eC2Bw_neUHic5VYjjSFYjIH6ntZ2Ao0NPsQL495LoV9oXzXe9sa5LiOr_VxQbMhsnE737AMQYuLTB",
  client_secret: "EIZ9koMsb9dKQ_aQTl_ig5z-PG01OXr95IP7HxyBnPMb6b_Q2ydQ31qhsQU7wj7YTlUefWIvf8ZqdGQU",
});

module.exports = paypal;
