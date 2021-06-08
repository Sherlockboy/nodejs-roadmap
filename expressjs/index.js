const express = require('express');
const path = require('path');
const members = require('./members');
const logger = require('./middleware/logger')

const app = express();

const PORT = process.env.PORT || 5000;

// Init middleware
// app.use(logger);

// Get all members
app.get('/api/members', (req, res) => res.json(members));

// Get single user
app.get('/api/members/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(404).json({message: `Member with id ${req.params.id} not found!`});
    }
});

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));