const router = require("express").Router();
const User = require("../models/User");
const { registerUser, loginUser, getMe } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware')


router.post("/register", registerUser)
router.post("/login", loginUser)
router.get('/me', protect, getMe)

module.exports = router;