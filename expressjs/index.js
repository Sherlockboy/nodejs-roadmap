const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

const members = [
    {
        id: 1,
        name: 'John',
        email: 'john@gmail.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'Jack',
        email: 'jack@gmail.com',
        status: 'inactive'
    },
    {
        id: 3,
        name: 'Max',
        email: 'max@gmail.com',
        status: 'active'
    },
    {
        id: 4,
        name: 'Barry',
        email: 'barry@gmail.com',
        status: 'inactive'
    }
];

// Get all members
app.get('/api/members', (req, res) => res.json(members));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));