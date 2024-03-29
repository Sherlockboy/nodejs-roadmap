const express = require('express');
const app = express();
const mongoose = require('mongoose');
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
mongoose.connect(
    process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB Atlas!'))
    .catch((err) => console.log(`${err}`));

// Starting server
app.listen(process.env.PORT);