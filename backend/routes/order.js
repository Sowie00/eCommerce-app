const {createOrder, updateOrder, deleteOrder, getAllOrders, getOrder, getMonthlyIncome} = require('../controllers/orderController');
const {protect, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('../middleware/authMiddleware');
const router = require("express").Router();

router.post("/", protect, createOrder);
router.put("/:id", verifyTokenAndAdmin, updateOrder);
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);
router.get("/find/:userId", verifyTokenAndAuthorization, getOrder);
router.get("/", verifyTokenAndAdmin, getAllOrders);
router.get("/income", verifyTokenAndAdmin, getMonthlyIncome);

module.exports = router;