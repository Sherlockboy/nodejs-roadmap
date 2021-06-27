const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// Import routes
const postsRoute = require('./routes/posts');

// Middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use('/posts', postsRoute);

// Routes
app.get('/', (req, res) => {
    res.send('We are on home');
})

// Connect to DB
try {
    mongoose.connect(
        encodeURIComponent(process.env.DB_CONNECTION), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, () => {
            console.log("Connected to MongoDB Cloud!");
        }
    );
} catch (err) {
    console.log(`Error: ${err}`);
}

// Starting server
app.listen(process.env.PORT);