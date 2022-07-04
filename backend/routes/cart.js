const {createCart, updateCart, deleteCart, getCart, getAllCarts} = require('../controllers/cartController');
const {protect, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('../middleware/authMiddleware');
const router = require("express").Router();

router.post("/", protect, createCart);
router.put("/:id", verifyTokenAndAuthorization, updateCart);
router.delete("/:id", verifyTokenAndAuthorization, deleteCart);
router.get("/find/:userId", verifyTokenAndAuthorization, getCart);
router.get("/", verifyTokenAndAdmin, getAllCarts);





module.exports = router;