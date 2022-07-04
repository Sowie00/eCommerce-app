const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


//@desc      Register user
//@route     POST /api/auth/register
//@access    Public

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields!')
    }

    const userExist = await User.findOne({email})
    if(userExist) {
        res.send(400)
        throw new Error('User already exists!')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            password: user.password,
            token: generateToken(user._id, user.isAdmin)
        })
    } else {
        res.status(400)
        throw new Error("Invalid User Data!")
    }
})

//@desc      Authenticate a user
//@route     POST /api/auth/login
//@access    Public

const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body

    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id, user.isAdmin)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }

    res.json({ message: 'Login User'})

})

//@desc      Update a existing user
//@route     PUT /api/users/:id
//@access    Public

const updateUser = asyncHandler(async (req, res) => {

    // encrypt password again

    if(req.body.password) {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword;

    }

    try {

        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedUser)

    } catch (error) {
        res.status(500)
        throw new Error(error)

    }
})

//Delete User

const deleteUser = asyncHandler(async (req, res) => {
    try {

        const deletedUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedUser);

    } catch (err) {
        res.status(500).json(err);
    }
})

//GET USER

const getUser = asyncHandler(async (req, res) => {
    try {

        const foundUser = await User.findById(req.params.id);
        res.status(200).json({
            _id: foundUser._id,
            username: foundUser.username,
            email: foundUser.email,
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL USERS

const getAllUsers = asyncHandler(async (req, res) => {
    const query = req.query.new
    try {
        const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find();
        res.status(200).json(users);

    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER STATS
const getUserStats = asyncHandler(async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {

        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear }}},
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1},
                }
            }
        ]);
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
});


const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
});

const generateToken = (id, isAdmin) => {
    return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}



module.exports = {
    registerUser,
    loginUser,
    getMe,
    updateUser,
    deleteUser,
    getUser,
    getAllUsers,
    getUserStats

}