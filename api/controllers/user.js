const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const router = express.Router();
const jwtSecret = process.env.JWT_SECRET;

router.post('/signup', async (req, res) => {

    if (!jwtSecret) {
        return res.status(404).json({ Error: "Invalid Auth Token." })
    }

    const { name, email, password } = req.body;
    let user = await User.findOne({ where: { email: email } });

    if (user) {
        return res.status(404).json({ Error: "Email already exist." })
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const isUser = await User.create({
        name: name,
        email: email,
        password: hashedPassword
    })

    const payload = {
        user: {
            id: isUser.id
        }
    };

    jwt.sign(payload, jwtSecret, (err, token) => {
        if (err) {
            return res.status(404).json({ error: err.message });
        }

        res.json({ token });
    })

});

router.post('/signin', async (req, res) => {

    const { email, password } = req.body;

    let user = await User.findOne({ where: { email: email } });

    if (!user) {
        return res.status(400).json({ error: 'User Does not Exist.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({ error: 'Invalid Credentials' });
    }

    // get userId
    const payload = {
        user: {
            id: user.id
        }
    };

    jwt.sign(
        payload,
        jwtSecret,
        (err, token) => {
            if (err) throw err;
            res.json({ token });
        }
    );

});

module.exports = router;