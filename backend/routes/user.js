const {updateUser, deleteUser, getUser, getAllUsers, getUserStats} = require('../controllers/userController');
const {protect, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('../middleware/authMiddleware');
const router = require("express").Router();

router.put("/:id", verifyTokenAndAuthorization, updateUser);
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);
router.get("/find/:id", verifyTokenAndAdmin, getUser);
router.get("/", verifyTokenAndAdmin, getAllUsers);
router.get("/stats", verifyTokenAndAdmin, getUserStats);

module.exports = router;