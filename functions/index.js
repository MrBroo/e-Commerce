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
// app.use(cors({ origin: true }));
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request recieved BOOM!!! for this amount >>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: parseInt(total),
    currency: "usd",
  });

  // Okk Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

// http://localhost:5001/e-clone-56597/us-central1/api
