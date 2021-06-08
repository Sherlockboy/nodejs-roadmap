const express = require('express');
const path = require('path');
const members = require('./members');

const app = express();

const PORT = process.env.PORT || 5000;

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

// Init middleware
app.use(logger);

// Get all members
app.get('/api/members', (req, res) => res.json(members));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));