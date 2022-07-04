const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');

const protect = asyncHandler(async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {

            // Get token from header
            token = req.headers.authorization.split(' ')[1];

            //verify
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //get user from token
            req.user = await User.findById(decoded.id).select('-password')
            console.log(req.user)
            next();

        } catch (error) {
            console.log(error);
            res.status(401)
            throw new Error('Not Authorized')
        }
    }

    if(!token) {
        res.status(401)
        throw new Error('Not Authorized, no token!')
    }
})

const verifyTokenAndAuthorization = (req, res, next) => {
    protect(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.status(403).json("You are not allowed!")
        }
    })
}

const verifyTokenAndAdmin = (req, res, next) => {
    protect(req, res, () => {
        if(req.user.isAdmin) {
            next()
        } else {
            res.status(403).json("You are not allowed!")
        }
    })
}

module.exports = { protect, verifyTokenAndAuthorization, verifyTokenAndAdmin }