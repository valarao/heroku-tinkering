const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (_req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = new User({
            name: name,
            email: email,
        });

        await newUser.save();
        return res.status(201).json({
            message: 'Created account successfully',
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }

});

module.exports = router;
