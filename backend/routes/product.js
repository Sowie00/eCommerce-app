const {createProduct, updateProduct, deleteProduct, getProduct, getAllProducts} = require('../controllers/productController');
const {protect, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('../middleware/authMiddleware');
const router = require("express").Router();

router.post("/", verifyTokenAndAdmin, createProduct);
router.put("/:id", verifyTokenAndAdmin, updateProduct);
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);
router.get("/find/:id", getProduct);
router.get("/", getAllProducts);


module.exports = router;