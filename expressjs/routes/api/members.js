const express = require('express');
const router = express.Router();
const members = require('../../members');

// Get all members
router.get('/', (req, res) => res.json(members));

// Get single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(404).json({message: `Member with id ${req.params.id} not found!`});
    }
});

module.exports = router;