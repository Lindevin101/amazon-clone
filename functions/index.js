const {onRequest} = require("firebase-functions/v2/https");
// Removed unused logger
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51OamUYAxMZUjM2ec...");

// API

// app config
const app = express();

// middleware
app.use(cors({origin: true}));
app.use(express.json());

// API roots
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({amount: total,
    currency: "usd"});
  response.status(201).send({clientSecret: paymentIntent.client_secret});
});

// Listen command
exports.api = onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/clone-11e7e/us-central1/api
