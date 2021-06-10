const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const members = require('../../members');

// Get all members
router.get('/', (req, res) => res.json(members));

// Get single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(404).json({
            message: `Member with id ${req.params.id} not found!`
        });
    }
});

// Create member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if (!newMember.name || !newMember.email) {
        res.status(400).json({
            message: "Please include email and name"
        })
    }

    res.json([...members, newMember])
})

// Update member
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if (found) {
        const updatedMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name = updatedMember.name || member.name;
                member.email = updatedMember.email || member.email;
                member.status = updatedMember.status || member.status;
                res.json({message: 'Member updated!', member});
            }
        })
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(404).json({
            message: `Member with id ${req.params.id} not found!`
        });
    }
});

// Delete member
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if (found) {
        const newMembers = members.filter(member => member.id !== parseInt(req.params.id))
        res.json({message: `Member with id ${req.params.id} deleted!`, members: newMembers});
    } else {
        res.status(404).json({
            message: `Member with id ${req.params.id} not found!`
        });
    }
});

module.exports = router;