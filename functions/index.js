const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51LjH3ELIfahDMMPDLKJkB2gfXuMsrRjZYtWk7XztFhiFf9mibEuiXI3rroYv10Yyd11SmVUgo3LHht9LNisqu9il004r6jx1cB"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request recieved BOOM!!! for this amount >>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // Okk Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen commad
exports.api = functions.https.onRequest(app);

// var http = require("http");

// var server = http.createServer(function (req, res) {
//   res.end("test");
// });

// server.on("listening", function () {
//   console.log("ok, server is running");
// });

// server.listen(80);

// http://localhost:5001/e-clone-56597/us-central1/api
