const express = require('express');
const router = express.Router();
const User = require('../Models/UserModel');

// POST Route to Save User Data
router.post('/users', async (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = new User({ name, email });
        await newUser.save();
        res.status(201).json({ message: "User Created Successfully", newUser });
    } catch (err) {
        res.status(400).json({ message: "Error Occurred", error: err.message });
    }
});

module.exports = router;
