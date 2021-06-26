const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Routes
app.get('/', (req, res) => {
    res.send('We are on home');
})

app.get('/posts', (req, res) => {
    res.send('We are on posts');
})

// Connect to DB
mongoose.connect(
    "mongodb+srv://men-rest-api:z9m!$Xt$iCh23T7@maincluster.udc0o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log("Connected to MongoDB Cloud!");
    }
);

// Starting server
app.listen(PORT);