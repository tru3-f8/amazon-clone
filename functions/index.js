const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51IqTFHFGhtgy0dmdqfn6r2cWUd57CSefeRcwEMLIMp7QzCNNGWaRfYBuzz06eGfhcy6LJmQgojO1VRg4v9cKnCxq00twJEeGrZ')

//Set up API

// - App Config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json()); //Allow to send data back and forth in JSON format

// - API Routes

//Get Request
app.get('/', (request, response) => response.status(200).send('hello world'))

//Post Request

app.post('/payments/create', async (request, response) => {
    //Getting the query information from Payment component within the useEffect
    const total = request.query.total;

    console.log('Payment request received for this amount', total)

    //Create the payment
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

// - Listen Command
exports.api = functions.https.onRequest(app) 


//Example Endpoint
//http function initialized (http://localhost:5001/clone-f2b6d/us-central1/api)