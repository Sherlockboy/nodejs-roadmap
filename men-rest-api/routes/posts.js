const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
});

// Get single post
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
});

// Create post
router.post('/', async (req, res) => {
    console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
});

// Update post
router.patch('/:id', async (req, res) => {
    try {
        const updateStatus = await Post.updateOne({
            _id: req.params.id
        }, {
            $set: {
                title: req.body.title
            }
        });
        res.status(200).json(updateStatus);
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
});


// Delete single post
router.delete('/:id', async (req, res) => {
    try {
        const deleteStatus = await Post.remove({
            _id: req.params.id
        });
        res.status(200).json(deleteStatus);
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
});

module.exports = router;