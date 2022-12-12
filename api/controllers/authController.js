const router = require('express').Router();
const { user } = require('../models');
const passport = require('../middlewares/authentication');

// /api/auth/signup
router.post('/signup', (req, res) => {
    console.log("POST body: ", req.body);
    user.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    })
        .then((userModel) => {
            req.login(userModel, () => res.status(201).json(userModel));
        })
        .catch((err) => {
            res.status(400).json({msg: 'Failed SignUp', err});
            // It's not a good practice to expose the error, but will be kept for practice
        })
})

router.post('/login', 
    passport.authenticate('local'),
    (req, res) => {
        // If this function gets called, authentication was successful
        // req.userModel contains the authenticated user
        res.json(req.userModel);
    });

router.get('/login', (req, res) => {
    if(req.userModel) {
        res.json(req.userModel)
    } else {
        res.sendStatus(401);
    }
})

router.post('/logout', function(req, res, next) {
    req.logout(function(err) {
        if(err) { return next(err); }
    });
    res.status(200).json( { message: 'Logout successful'});
})

module.exports = router;